import { NhRepository } from './NhRepository'

export class NhService {
  constructor(private repo = new NhRepository()) {}

  async findFavoriteCountByAuthor(userId: string) {
    const data = await this.repo.findFavoriteCountByAuthor(userId)
    return data.map((x) => ({
      authorUrl: x.authorUrl,
      count: x._count._all,
    }))
  }

  async saveFavorite(params: {
    authorUrl: string
    url: string
    userId: string
  }) {
    const { authorUrl, url, userId } = params

    const alreadyExists = await this.repo.userOwnsFavorite(url, userId)
    if (alreadyExists) {
      return alreadyExists
    }

    const authorExists = await this.repo.userOwnsAuthor(authorUrl, userId)
    if (!authorExists) {
      await this.repo.createAuthor({
        url: authorUrl,
        userId: userId,
      })
    }

    return await this.repo.createFavorite(params)
  }

  async toggleAuthorCheck(params: { url: string; userId: string }) {
    const author = await this.repo.userOwnsAuthor(params.url, params.userId)
    if (!author) {
      throw new Error('Author does not exist')
    }

    await this.repo.toggleAuthorCheck({
      checkedAt: author.checkedAt ? null : new Date().toISOString(),
      url: params.url,
      userId: params.userId,
    })

    const authors = await this.repo.findNhAuthorsByUserId(params.userId)

    return authors.find((x) => x.url === params.url)
  }

  async findNhAuthorsByUserId(userId: string) {
    return await this.repo.findNhAuthorsByUserId(userId)
  }
}
