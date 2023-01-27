import { myPrismaClient } from '../../utils/myPrismaClient'
import { CategoryInput } from './types/CategoryInput'

export class CategoryRepository {
  constructor(private readonly prisma = myPrismaClient) {}

  isAllowed(userId: string, id: string) {
    return this.prisma.category.findFirst({
      where: {
        id,
        userId,
      },
    })
  }

  create(input: CategoryInput, userId: string) {
    const { user, createdAt, updatedAt, expenses, _count, ...data } = input
    return this.prisma.category.create({
      data: {
        ...data,
        userId,
      },
    })
  }

  update(input: CategoryInput, userId: string) {
    const { user, createdAt, updatedAt, _count, expenses, ...data } = input
    return this.prisma.category.update({
      where: {
        id: input.id,
      },
      data,
    })
  }

  findById(id: string) {
    return this.prisma.category.findUnique({
      where: {
        id,
      },
    })
  }

  findByUserId(userId: string) {
    return this.prisma.category.findMany({
      where: {
        userId,
      },
    })
  }

  delete(id: string) {
    return this.prisma.category.delete({
      where: {
        id,
      },
    })
  }
}
