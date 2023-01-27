import { Arg, Ctx, Mutation, Query, UseMiddleware } from 'type-graphql'
import { Category } from '../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { CategoryService } from './CategoryService'
import { CategoryInput } from './types/CategoryInput'

export class CategoryResolver {
  constructor(private service = new CategoryService()) {}

  @Query(() => [Category!]!)
  @UseMiddleware(isAuth)
  async categoriesQuery(@Ctx() { req }: MyContext): Promise<Category[]> {
    return this.service.findByUserId(req.user.id)
  }

  @Mutation(() => Category, {
    nullable: false,
  })
  @UseMiddleware(isAuth)
  async saveCategoryMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: CategoryInput
  ): Promise<Category> {
    return this.service.save(data, req.user.id)
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteCategoryMutation(
    @Ctx() { req }: MyContext,
    @Arg('id') id: string
  ): Promise<boolean> {
    return this.service.delete(id, req.user.id)
  }
}
