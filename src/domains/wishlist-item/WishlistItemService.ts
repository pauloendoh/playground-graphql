import { WishlistItemValidInput } from './types/WishlistItemValidInput'
import { WishlistItemRepository } from './WishlistItemRepository'

export class WishlistItemService {
  constructor(private repo = new WishlistItemRepository()) {}

  saveWishlistItem(
    wishlistItem: WishlistItemValidInput,
    userId: string
  ): Promise<any> {
    if (wishlistItem.id) {
      return this.updateWishlistItem(wishlistItem, userId)
    }

    return this.createWishlistItem(wishlistItem, userId)
  }

  createWishlistItem = async (
    wishlistItem: WishlistItemValidInput,
    userId: string
  ) => {
    return await this.repo.createWishlistItem(wishlistItem, userId)
  }

  updateWishlistItem(wishlistItem: WishlistItemValidInput, userId: string) {
    return this.repo.updateWishlistItem(wishlistItem, userId)
  }

  findWishlistItems(userId: string) {
    return this.repo.findWishlistItems(userId)
  }
}
