import { ColorRepository } from './ColorRepository'
import { MixedColorInput } from './types/MixedColorInput'
import { RawColorInput } from './types/RawColorInput'

export class RawColorService {
  constructor(private colorRepo = new ColorRepository()) {}

  async saveRawColor(input: RawColorInput, userId: string) {
    if (input.id) {
      return this.colorRepo.updateRawColor(input)
    }

    return this.colorRepo.createRawColor(input, userId)
  }

  async findRawColors(userId: string) {
    return this.colorRepo.findRawColors(userId)
  }

  async findMixedColors(userId: string) {
    return this.colorRepo.findMixedColors(userId)
  }

  async saveMixedColor(input: MixedColorInput, userId: string) {
    if (input.id) {
      return this.colorRepo.updateMixedColor(input, userId)
    }

    const existingMixedColor = await this.colorRepo.findMixedColorByName(
      input.name,
      userId
    )

    if (existingMixedColor) {
      return this.colorRepo.updateMixedColor(
        {
          ...input,
          id: existingMixedColor.id,
        },
        userId
      )
    }

    return this.colorRepo.createMixedColor(input, userId)
  }

  async deleteMixedColor(id: string, userId: string) {
    const result = await this.colorRepo.deleteMixedColor(id, userId)

    if (!result) {
      throw new Error('Could not delete mixed color')
    }

    if (result.count === 0) {
      throw new Error('Could not delete mixed color')
    }

    return true
  }
}
