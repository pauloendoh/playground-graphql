import { myPrismaClient } from '../../utils/myPrismaClient'
import { IssueLabelInput } from './types/IssueLabelInput'

export class IssueLabelRepository {
  constructor(private readonly prisma = myPrismaClient) {}

  isAllowed(userId: string, id: string) {
    return this.prisma.issueLabel.findFirst({
      where: {
        id,
        userId,
      },
    })
  }

  create(input: IssueLabelInput, userId: string) {
    const { createdAt, updatedAt, ...data } = input
    return this.prisma.issueLabel.create({
      data: {
        ...data,
        userId,
      },
    })
  }

  update(input: IssueLabelInput, userId: string) {
    const { createdAt, updatedAt, ...data } = input
    return this.prisma.issueLabel.update({
      where: {
        id: input.id,
      },
      data,
    })
  }

  findById(id: string) {
    return this.prisma.issueLabel.findUnique({
      where: {
        id,
      },
    })
  }

  findByUserId(userId: string) {
    return this.prisma.issueLabel.findMany({
      where: {
        userId,
      },
    })
  }

  delete(id: string) {
    return this.prisma.issueLabel.delete({
      where: {
        id,
      },
    })
  }
}
