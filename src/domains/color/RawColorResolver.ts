import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { RawColor } from '../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { RawColorService } from './RawColorService'
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
}
