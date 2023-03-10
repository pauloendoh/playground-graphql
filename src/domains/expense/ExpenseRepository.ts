import { myPrismaClient } from '../../utils/myPrismaClient'
import { ExpenseFilterInput } from './types/ExpenseFilterInput'
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
        categories: { set: input.categoryIds?.map((id) => ({ id })) },
        userId: undefined,
      },
    })
  }

  findMany(params: {
    userId: string
    pagination: PaginationInput
    filter?: ExpenseFilterInput
  }) {
    const { userId, pagination, filter } = params

    const skip =
      pagination && pagination.page && pagination.pageSize
        ? (pagination.page - 1) * pagination.pageSize
        : undefined

    return this.prisma.expense.findMany({
      where: {
        userId,
        name:
          filter && filter.expensesByText.length > 0
            ? {
                contains: filter?.expensesByText,
                mode: 'insensitive',
              }
            : undefined,
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

  findRecurrentExpenses(userId: string) {
    return this.prisma.expense.findMany({
      where: {
        userId,
        timesPerMonth: {
          gt: 0,
        },
      },
      orderBy: {
        value: 'desc',
      },
    })
  }
}
