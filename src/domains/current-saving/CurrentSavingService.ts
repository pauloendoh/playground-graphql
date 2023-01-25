import { CurrentSavingRepository } from './CurrentSavingRepository'
import { CurrentSavingValidInput } from './types/CurrentSavingValidInput'

export class CurrentSavingService {
  constructor(private savingRepo = new CurrentSavingRepository()) {}

  findCurrentSavings(userId: string) {
    return this.savingRepo.findCurrentSavings(userId)
  }

  saveCurrentSaving(input: CurrentSavingValidInput, userId: string) {
    if (input.id) return this.updateCurrentSaving(input, userId)

    return this.createCurrentSaving(input, userId)
  }

  createCurrentSaving(input: CurrentSavingValidInput, userId: string) {
    return this.savingRepo.createCurrentSaving(input, userId)
  }

  updateCurrentSaving(input: CurrentSavingValidInput, userId: string) {
    const isAllowed = this.savingRepo.userOwnsSaving(input.id!, userId)
    if (!isAllowed) throw new Error('You are not allowed to update this saving')

    return this.savingRepo.updateCurrentSaving(input)
  }

  async deleteSaving(savingId: string, userId: string) {
    const isAllowed = this.savingRepo.userOwnsSaving(savingId, userId)
    if (!isAllowed) throw new Error('You are not allowed to delete this saving')

    const deleted = await this.savingRepo.deleteCurrentSaving(savingId)
    return !!deleted
  }
}
