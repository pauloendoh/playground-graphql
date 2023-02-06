import { myPrismaClient } from '../../utils/myPrismaClient'
import { SalaryValidInput } from './types/SalaryValidInput'

export class SalaryRepository {
  constructor(private prismaClient = myPrismaClient) {}

  userOwns(salaryId: string, userId: string) {
    return this.prismaClient.salary.findFirst({
      where: {
        id: salaryId,
        userId,
      },
    })
  }

  find(userId: string) {
    return this.prismaClient.salary.findFirst({
      where: {
        userId,
      },
    })
  }

  findMany(userId: string) {
    return this.prismaClient.salary.findMany({
      where: {
        userId,
      },
    })
  }

  create(input: SalaryValidInput, userId: string) {
    const { user, ...data } = input
    return this.prismaClient.salary.create({
      data: {
        ...data,
        userId,
      },
    })
  }

  update(input: SalaryValidInput, userId: string) {
    const { user, updatedAt, ...data } = input

    return this.prismaClient.salary.update({
      data: {
        value: data.value,
      },
      where: {
        userId,
      },
    })
  }

  delete(salaryId: string) {
    return this.prismaClient.salary.delete({
      where: {
        id: salaryId,
      },
    })
  }
}
