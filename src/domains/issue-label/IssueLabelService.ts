import { IssueLabelRepository } from './IssueLabelRepository'
import { IssueLabelInput } from './types/IssueLabelInput'

export class IssueLabelService {
  constructor(private readonly issueLabelRepo = new IssueLabelRepository()) {}

  async save(input: IssueLabelInput, userId: string) {
    if (input.id) {
      const isAllowed = await this.issueLabelRepo.isAllowed(userId, input.id)
      if (!isAllowed) {
        throw new Error('Not allowed')
      }
      return this.issueLabelRepo.update(input, userId)
    }
    return this.issueLabelRepo.create(input, userId)
  }

  findById(id: string) {
    return this.issueLabelRepo.findById(id)
  }

  async findByUserId(userId: string) {
    return this.issueLabelRepo.findByUserId(userId)
  }

  async delete(id: string, userId: string) {
    const isAllowed = await this.issueLabelRepo.isAllowed(userId, id)
    if (!isAllowed) {
      throw new Error('Not allowed')
    }

    const deleted = await this.issueLabelRepo.delete(id)
    return !!deleted
  }
}
