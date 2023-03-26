import { ColorRepository } from './ColorRepository'
import { MixedColorInput } from './types/MixedColorInput'
import { RawColorInput } from './types/RawColorInput'

export class RawColorService {
  constructor(private savingRepo = new ColorRepository()) {}

  async saveRawColor(input: RawColorInput, userId: string) {
    if (input.id) {
      return this.savingRepo.updateRawColor(input)
    }

    return this.savingRepo.createRawColor(input, userId)
  }

  async findRawColors(userId: string) {
    return this.savingRepo.findRawColors(userId)
  }

  async findMixedColors(userId: string) {
    return this.savingRepo.findMixedColors(userId)
  }

  async saveMixedColor(input: MixedColorInput, userId: string) {
    if (input.id) {
      return this.savingRepo.updateMixedColor(input, userId)
    }
    return this.savingRepo.createMixedColor(input, userId)
  }
}
