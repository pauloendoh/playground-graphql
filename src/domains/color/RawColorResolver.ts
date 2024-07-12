import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { MixedColor, RawColor } from '../../../prisma-typegraphql'
import { MyContext } from '../../utils/auth/MyContext'
import { isAuth } from '../../utils/auth/isAuth'
import { RawColorService } from './RawColorService'
import { MixedColorInput } from './types/MixedColorInput'
import { RawColorInput } from './types/RawColorInput'

@Resolver()
export class RawColorResolver {
  constructor(private rawColorService = new RawColorService()) {}

  @Query(() => [RawColor])
  @UseMiddleware(isAuth)
  async rawColorsQuery(@Ctx() { req }: MyContext): Promise<RawColor[]> {
    return this.rawColorService.findRawColors(req.user.id)
  }

  @Mutation(() => RawColor)
  @UseMiddleware(isAuth)
  async saveRawColorMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: RawColorInput
  ): Promise<RawColor> {
    return this.rawColorService.saveRawColor(data, req.user.id)
  }

  @Query(() => [MixedColor])
  @UseMiddleware(isAuth)
  async mixedColorsQuery(@Ctx() { req }: MyContext): Promise<MixedColor[]> {
    return this.rawColorService.findMixedColors(req.user.id)
  }

  @Mutation(() => MixedColor)
  @UseMiddleware(isAuth)
  async saveMixedColorMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: MixedColorInput
  ): Promise<MixedColor> {
    return this.rawColorService.saveMixedColor(data, req.user.id)
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteMixedColorMutation(
    @Ctx() { req }: MyContext,
    @Arg('id') id: string
  ): Promise<boolean> {
    return this.rawColorService.deleteMixedColor(id, req.user.id)
  }
}
