import { myPrismaClient } from '../../utils/myPrismaClient'
import { RawColorInput } from './types/RawColorInput'

export class ColorRepository {
  constructor(private prismaClient = myPrismaClient) {}

  createRawColor(input: RawColorInput, userId: string) {
    return this.prismaClient.rawColor.create({
      data: {
        name: input.name,
        color: input.color,
        userId: userId,
      },
    })
  }

  updateRawColor(input: RawColorInput) {
    return this.prismaClient.rawColor.update({
      data: {
        name: input.name,
        color: input.color,
      },
      where: {
        id: input.id,
      },
    })
  }

  findRawColors(userId: string) {
    return this.prismaClient.rawColor.findMany({
      where: {
        userId,
      },
    })
  }
}
