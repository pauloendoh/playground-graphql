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

  findMixedColorByName(name: string, userId: string) {
    return this.prismaClient.mixedColor.findFirst({
      where: {
        name,
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

  async updateMixedColor(input: MixedColorInput, userId: string) {
    const existingProportions =
      await this.prismaClient.colorProportion.findMany({
        where: {
          mixedColorId: input.id,
        },
      })

    const existingRawColorIds = existingProportions.map(
      (colorProportion) => colorProportion.rawColorId
    )

    const proportionsToRemove = existingProportions.filter(
      (existingProportion) =>
        !input.colorProportions?.some(
          (newColorProportion) =>
            newColorProportion.rawColorId === existingProportion.rawColorId
        )
    )

    if (proportionsToRemove.length > 0) {
      await this.prismaClient.colorProportion.deleteMany({
        where: {
          id: {
            in: proportionsToRemove.map(
              (colorProportion) => colorProportion.id
            ),
          },
        },
      })
    }

    const proportionsToUpdate = input.colorProportions?.filter(
      (colorProportion) => {
        const alreadySaved = existingProportions.find(
          (existingProportion) =>
            existingProportion.rawColorId === colorProportion.rawColorId
        )

        if (alreadySaved) {
          // sometimes it was sending with undefined id
          colorProportion.id = alreadySaved.id
          return true
        }
      }
    )
    const proportionsToCreate = input.colorProportions?.filter(
      (colorProportion) =>
        !existingRawColorIds.includes(colorProportion.rawColorId)
    )

    return this.prismaClient.mixedColor.update({
      data: {
        name: input.name,
        color: input.color,
        colorProportions: {
          update: proportionsToUpdate?.map((colorProportion) => ({
            where: {
              id: colorProportion.id,
            },
            data: {
              userId,
              rawColorId: colorProportion.rawColorId,
              proportion: colorProportion.proportion,
            },
          })),
          create: proportionsToCreate?.map((colorProportion) => ({
            userId: userId,
            rawColorId: colorProportion.rawColorId,
            proportion: colorProportion.proportion,
          })),
        },
      },
      where: {
        id: input.id,
      },
      include: {
        colorProportions: true,
      },
    })
  }

  deleteMixedColor(id: string, userId: string) {
    return this.prismaClient.mixedColor.deleteMany({
      where: {
        id,
        userId,
      },
    })
  }
}
