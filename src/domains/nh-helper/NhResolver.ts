import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { NhAuthor } from '../../prisma-typegraphql'
import { MyContext } from '../../utils/auth/MyContext'
import { isAuth } from '../../utils/auth/isAuth'
import { NhService } from './NhService'
import { AuthorCount } from './types/AuthorCount'

@Resolver()
export class NhResolver {
  constructor(private nhService = new NhService()) {}

  @Query(() => [AuthorCount])
  @UseMiddleware(isAuth)
  async groupedNhFavoritesQuery(
    @Ctx() { req }: MyContext
  ): Promise<AuthorCount[]> {
    return this.nhService.findFavoriteCountByAuthor(req.user.id)
  }

  @Query(() => [NhAuthor])
  @UseMiddleware(isAuth)
  async nhAuthorsQuery(@Ctx() { req }: MyContext) {
    return this.nhService.findNhAuthorsByUserId(req.user.id)
  }

  @Mutation(() => NhAuthor)
  @UseMiddleware(isAuth)
  async toggleNhAuthorMutation(
    @Ctx() { req }: MyContext,
    @Arg('authorUrl') authorUrl: string
  ) {
    return this.nhService.toggleAuthorCheck({
      url: authorUrl,
      userId: req.user.id,
    })
  }
}
