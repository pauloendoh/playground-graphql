import { SavingRepository } from './SavingRepository'
import { SavingValidInput } from './types/SavingValidInput'

export class SavingService {
  constructor(private savingRepo = new SavingRepository()) {}

  findSavings(userId: string) {
    return this.savingRepo.findSavings(userId)
  }

  saveSaving(input: SavingValidInput, userId: string) {
    if (input.id) return this.updateSaving(input, userId)

    return this.createSaving(input, userId)
  }

  createSaving(input: SavingValidInput, userId: string) {
    return this.savingRepo.createSaving(input, userId)
  }

  updateSaving(input: SavingValidInput, userId: string) {
    const isAllowed = this.savingRepo.userOwnsSaving(input.id!, userId)
    if (!isAllowed) throw new Error('You are not allowed to update this saving')

    return this.savingRepo.updateSaving(input)
  }

  async deleteSaving(savingId: string, userId: string) {
    const isAllowed = this.savingRepo.userOwnsSaving(savingId, userId)
    if (!isAllowed) throw new Error('You are not allowed to delete this saving')

    const deleted = await this.savingRepo.deleteSaving(savingId)
    return !!deleted
  }

  async selectSavingAsAverageMonthlyGrowth(params: {
    requesterId: string
    savingId: string
  }) {
    const { requesterId, savingId } = params
    const isAllowed = this.savingRepo.userOwnsSaving(savingId, requesterId)
    if (!isAllowed)
      throw new Error(
        'You are not allowed to select this saving as average monthly growth'
      )

    await this.savingRepo.unselectAllSavingsAsAverageMonthlyGrowth(requesterId)

    return this.savingRepo.selectSavingAsAverageMonthlyGrowth(savingId)
  }
}
