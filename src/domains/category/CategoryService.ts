import { CategoryRepository } from './CategoryRepository'
import { CategoryInput } from './types/CategoryInput'

export class CategoryService {
  constructor(private readonly categoryRepo = new CategoryRepository()) {}

  async save(input: CategoryInput, userId: string) {
    if (input.id) {
      const isAllowed = await this.categoryRepo.isAllowed(userId, input.id)
      if (!isAllowed) {
        throw new Error('Not allowed')
      }
      return this.categoryRepo.update(input, userId)
    }
    return this.categoryRepo.create(input, userId)
  }

  async findByUserId(userId: string) {
    return this.categoryRepo.findByUserId(userId)
  }

  async delete(id: string, userId: string) {
    const isAllowed = await this.categoryRepo.isAllowed(userId, id)
    if (!isAllowed) {
      throw new Error('Not allowed')
    }

    const deleted = await this.categoryRepo.delete(id)
    return !!deleted
  }
}
