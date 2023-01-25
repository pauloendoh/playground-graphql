import { myPrismaClient } from '../../utils/myPrismaClient'
import { CurrentSavingValidInput } from './types/CurrentSavingValidInput'

export class CurrentSavingRepository {
  constructor(private prismaClient = myPrismaClient) {}

  userOwnsSaving(savingId: string, userId: string) {
    return this.prismaClient.currentSaving.findFirst({
      where: {
        id: savingId,
        userId,
      },
    })
  }

  findCurrentSavings(userId: string) {
    return this.prismaClient.currentSaving.findMany({
      where: {
        userId,
      },
    })
  }

  createCurrentSaving(input: CurrentSavingValidInput, userId: string) {
    return this.prismaClient.currentSaving.create({
      data: {
        ...input,
        userId,
      },
    })
  }

  updateCurrentSaving(input: CurrentSavingValidInput) {
    return this.prismaClient.currentSaving.update({
      data: {
        ...input,
      },
      where: {
        id: input.id,
      },
    })
  }

  deleteCurrentSaving(savingId: string) {
    return this.prismaClient.currentSaving.delete({
      where: {
        id: savingId,
      },
    })
  }
}
