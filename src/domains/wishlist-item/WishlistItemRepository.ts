import { myPrismaClient } from '../../utils/myPrismaClient'
import { WishlistItemValidInput } from './types/WishlistItemValidInput'

export class WishlistItemRepository {
  constructor(private prisma = myPrismaClient) {}

  createWishlistItem = async (
    input: WishlistItemValidInput,
    userId: string
  ) => {
    const { user, updatedAt, createdAt, ...data } = input

    return await this.prisma.wishlistItem.create({
      data: {
        ...data,
        userId,
      },
    })
  }

  updateWishlistItem(input: WishlistItemValidInput, userId: string) {
    const { user, updatedAt, createdAt, ...data } = input
    return this.prisma.wishlistItem.update({
      where: {
        id: input.id,
      },
      data: {
        ...data,
        userId,
      },
    })
  }

  async isOwner(wishlistItemId: string, userId: string) {
    const ok = await this.prisma.wishlistItem.findUnique({
      where: {
        id: wishlistItemId,
      },
      select: {
        userId: true,
      },
    })

    return !!ok
  }

  async findWishlistItems(userId: string) {
    return await this.prisma.wishlistItem.findMany({
      where: {
        userId,
      },
    })
  }
}
