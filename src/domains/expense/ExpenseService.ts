import { ExpenseRepository } from './ExpenseRepository'
import { ExpenseInput } from './types/ExpenseInput'

export class ExpenseService {
  constructor(private readonly expenseRepository = new ExpenseRepository()) {}

  async saveExpense(input: ExpenseInput, userId: string) {
    if (input.id) {
      const isAllowed = await this.expenseRepository.isAllowed(userId, input.id)
      if (!isAllowed) {
        throw new Error('Not allowed')
      }
      return this.expenseRepository.updateExpense(input, userId)
    }
    return this.expenseRepository.createExpense(input, userId)
  }

  async findExpenses(userId: string) {
    return this.expenseRepository.findExpenses(userId)
  }

  async deleteExpense(id: string, userId: string) {
    const isAllowed = await this.expenseRepository.isAllowed(userId, id)
    if (!isAllowed) {
      throw new Error('Not allowed')
    }

    const deleted = await this.expenseRepository.deleteExpense(id)
    return !!deleted
  }
}