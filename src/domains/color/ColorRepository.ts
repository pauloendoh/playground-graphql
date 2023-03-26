import { myPrismaClient } from '../../utils/myPrismaClient'
import { MixedColorInput } from './types/MixedColorInput'
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

  findMixedColors(userId: string) {
    return this.prismaClient.mixedColor.findMany({
      where: {
        userId,
      },
    })
  }

  createMixedColor(input: MixedColorInput, userId: string) {
    return this.prismaClient.mixedColor.create({
      data: {
        name: input.name,
        color: input.color,
        userId: userId,
        colorProportions: {
          create: input.colorProportions?.map((colorProportion) => ({
            userId,
            rawColorId: colorProportion.rawColorId,
            proportion: colorProportion.proportion,
          })),
        },
      },
    })
  }

  updateMixedColor(input: MixedColorInput, userId: string) {
    const existingProportions = input.colorProportions?.filter(
      (colorProportion) => colorProportion.id
    )
    const newProportions = input.colorProportions?.filter(
      (colorProportion) => !colorProportion.id
    )

    return this.prismaClient.mixedColor.update({
      data: {
        name: input.name,
        color: input.color,
        colorProportions: {
          update: existingProportions?.map((colorProportion) => ({
            where: {
              id: colorProportion.id,
            },
            data: {
              userId,
              rawColorId: colorProportion.rawColorId,
              proportion: colorProportion.proportion,
            },
          })),
          create: newProportions?.map((colorProportion) => ({
            userId: userId,
            rawColorId: colorProportion.rawColorId,
            proportion: colorProportion.proportion,
          })),
        },
      },
      where: {
        id: input.id,
      },
    })
  }
}
