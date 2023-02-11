import { ExpenseRepository } from './ExpenseRepository'
import { ExpenseFilterInput } from './types/ExpenseFilterInput'
import { ExpenseInput } from './types/ExpenseInput'
import { PaginationInput } from './types/PaginationInput'

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

  async findMany(params: {
    userId: string
    pagination: PaginationInput
    filter?: ExpenseFilterInput
  }) {
    const { userId, pagination, filter } = params
    return this.expenseRepository.findMany({ userId, pagination, filter })
  }

  async deleteExpense(id: string, userId: string) {
    const isAllowed = await this.expenseRepository.isAllowed(userId, id)
    if (!isAllowed) {
      throw new Error('Not allowed')
    }

    const deleted = await this.expenseRepository.deleteExpense(id)
    return !!deleted
  }

  async findRecurrentExpenses(userId: string) {
    return this.expenseRepository.findRecurrentExpenses(userId)
  }
}
