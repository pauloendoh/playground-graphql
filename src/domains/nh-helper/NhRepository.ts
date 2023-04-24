import { myPrismaClient } from '../../utils/myPrismaClient'

export class NhRepository {
  constructor(private prisma = myPrismaClient) {}

  async userOwnsAuthor(url: string, userId: string) {
    return await this.prisma.nhAuthor.findFirst({
      where: {
        url: url,
        userId: userId,
      },
    })
  }

  async userOwnsFavorite(url: string, userId: string) {
    return await this.prisma.nhFavorite.findFirst({
      where: {
        url: url,
        userId: userId,
      },
    })
  }

  async createFavorite(params: {
    authorUrl: string
    url: string
    userId: string
  }) {
    return await this.prisma.nhFavorite.create({
      data: {
        authorUrl: params.authorUrl,
        url: params.url,
        userId: params.userId,
      },
    })
  }

  async createAuthor(params: { url: string; userId: string }) {
    return await this.prisma.nhAuthor.create({
      data: {
        url: params.url,
        userId: params.userId,
      },
    })
  }

  async findNhAuthorsByUserId(userId: string) {
    return await this.prisma.nhAuthor.findMany({
      where: {
        userId: userId,
      },
    })
  }

  async findFavoriteCountByAuthor(userId: string) {
    return await this.prisma.nhFavorite.groupBy({
      where: {
        userId: userId,
      },
      by: ['authorUrl'],
      _count: {
        _all: true,
      },
    })
  }

  async toggleAuthorCheck(params: {
    url: string
    userId: string
    checkedAt: string | null
  }) {
    return await this.prisma.nhAuthor.updateMany({
      where: {
        url: params.url,
        userId: params.userId,
      },
      data: {
        checkedAt: params.checkedAt,
      },
    })
  }
}
