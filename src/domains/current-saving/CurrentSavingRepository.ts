import { myPrismaClient } from '../../utils/myPrismaClient'
import { CurrentSavingValidInput } from './types/CurrentExpenseValidInput'

export class CurrentSavingRepository {
  constructor(private prismaClient = myPrismaClient) {}

  createCurrentExpense(input: CurrentSavingValidInput, userId: string) {
    return this.prismaClient.currentSaving.create({
      data: {
        ...input,
        userId,
      },
    })
  }
}
