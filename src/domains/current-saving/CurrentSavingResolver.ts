import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { CurrentSaving } from '../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { CurrentSavingService } from './CurrentSavingService'
import { CurrentSavingValidInput } from './types/CurrentSavingValidInput'

@Resolver()
export class CurrentSavingResolver {
  constructor(private savingService = new CurrentSavingService()) {}

  @Query(() => [CurrentSaving])
  @UseMiddleware(isAuth)
  async currentSavingsQuery(
    @Ctx() { req }: MyContext
  ): Promise<CurrentSaving[]> {
    return this.savingService.findCurrentSavings(req.user.id)
  }

  @Mutation(() => CurrentSaving)
  @UseMiddleware(isAuth)
  async saveCurrentSavingMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: CurrentSavingValidInput
  ) {
    return this.savingService.saveCurrentSaving(data, req.user.id)
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteSavingMutation(
    @Ctx() { req }: MyContext,
    @Arg('savingId') savingId: string
  ) {
    return this.savingService.deleteSaving(savingId, req.user.id)
  }
}
