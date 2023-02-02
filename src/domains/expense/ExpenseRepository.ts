import { myPrismaClient } from '../../utils/myPrismaClient'
import { ExpenseInput } from './types/ExpenseInput'
import { PaginationInput } from './types/PaginationInput'

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
    const { user, createdAt, updatedAt, categoryIds, ...data } = input
    return this.prisma.expense.create({
      data: {
        ...data,
        categories: { connect: categoryIds?.map((id) => ({ id })) },
        userId,
      },
    })
  }

  updateExpense(input: ExpenseInput, userId: string) {
    const { user, createdAt, updatedAt, categoryIds, ...data } = input
    return this.prisma.expense.update({
      where: {
        id: input.id,
      },
      data: {
        ...data,
        categories: { connect: input.categoryIds?.map((id) => ({ id })) },
      },
    })
  }

  findExpenses(userId: string, pagination: PaginationInput) {
    const skip =
      pagination && pagination.page && pagination.pageSize
        ? (pagination.page - 1) * pagination.pageSize
        : undefined

    return this.prisma.expense.findMany({
      where: {
        userId,
      },
      orderBy: {
        date: 'desc',
      },
      skip,
      take: pagination?.pageSize,
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
