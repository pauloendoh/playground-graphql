import { Arg, Ctx, Mutation, Query, UseMiddleware } from 'type-graphql'
import { IssueLabel } from '../../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { IssueLabelService } from './IssueLabelService'
import { IssueLabelInput } from './types/IssueLabelInput'

export class IssueLabelResolver {
  constructor(private service = new IssueLabelService()) {}

  @Query(() => [IssueLabel!]!)
  @UseMiddleware(isAuth)
  async issueLabelsQuery(@Ctx() { req }: MyContext): Promise<IssueLabel[]> {
    return this.service.findByUserId(req.user.id)
  }

  @Mutation(() => IssueLabel, {
    nullable: false,
  })
  @UseMiddleware(isAuth)
  async saveIssueLabelMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: IssueLabelInput
  ): Promise<IssueLabel> {
    return this.service.save(data, req.user.id)
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteIssueLabelMutation(
    @Ctx() { req }: MyContext,
    @Arg('id') id: string
  ): Promise<boolean> {
    return this.service.delete(id, req.user.id)
  }
}
