import { myPrismaClient } from '../../utils/myPrismaClient'
import { ExpenseInput } from './types/ExpenseInput'

export class ExpenseRepository {
  constructor(private readonly prisma = myPrismaClient) {}

  isAllowed(userId: string, expenseId: string) {
    return this.prisma.expense.findFirst({
      where: {
        id: expenseId,
        userId,
      },
    })
  }

  createExpense(input: ExpenseInput, userId: string) {
    const { user, createdAt, updatedAt, ...data } = input
    return this.prisma.expense.create({
      data: {
        ...data,
        userId,
      },
    })
  }

  updateExpense(input: ExpenseInput, userId: string) {
    const { user, createdAt, updatedAt, ...data } = input
    return this.prisma.expense.update({
      where: {
        id: input.id,
      },
      data,
    })
  }

  findExpenses(userId: string) {
    return this.prisma.expense.findMany({
      where: {
        userId,
      },
    })
  }

  deleteExpense(id: string) {
    return this.prisma.expense.delete({
      where: {
        id,
      },
    })
  }
}