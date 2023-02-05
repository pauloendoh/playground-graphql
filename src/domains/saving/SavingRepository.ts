import { myPrismaClient } from '../../utils/myPrismaClient'
import { SavingValidInput } from './types/SavingValidInput'

export class SavingRepository {
  constructor(private prismaClient = myPrismaClient) {}

  userOwnsSaving(savingId: string, userId: string) {
    return this.prismaClient.saving.findFirst({
      where: {
        id: savingId,
        userId,
      },
    })
  }

  findSavings(userId: string) {
    return this.prismaClient.saving.findMany({
      where: {
        userId,
      },
    })
  }

  createSaving(input: SavingValidInput, userId: string) {
    const { user, ...data } = input
    return this.prismaClient.saving.create({
      data: {
        ...data,
        userId,
      },
    })
  }

  updateSaving(input: SavingValidInput) {
    const { user, updatedAt, ...data } = input

    return this.prismaClient.saving.update({
      data,
      where: {
        id: input.id,
      },
    })
  }

  deleteSaving(savingId: string) {
    return this.prismaClient.saving.delete({
      where: {
        id: savingId,
      },
    })
  }
}
