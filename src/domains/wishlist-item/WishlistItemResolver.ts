import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { WishlistItem } from '../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { WishlistItemValidInput } from './types/WishlistItemValidInput'
import { WishlistItemService } from './WishlistItemService'

@Resolver()
export class WishlistItemResolver {
  constructor(private service = new WishlistItemService()) {}

  @Query(() => [WishlistItem])
  @UseMiddleware(isAuth)
  async wishlistItemsQuery(@Ctx() { req }: MyContext): Promise<WishlistItem[]> {
    return this.service.findWishlistItems(req.user.id)
  }

  @Mutation(() => WishlistItem!)
  @UseMiddleware(isAuth)
  async saveWishlistItemMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: WishlistItemValidInput
  ): Promise<WishlistItem> {
    return this.service.saveWishlistItem(data, req.user.id)
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteWishlistMutation(
    @Ctx() { req }: MyContext,
    @Arg('id') id: string
  ) {
    return this.service.delete(id, req.user.id)
  }
}
