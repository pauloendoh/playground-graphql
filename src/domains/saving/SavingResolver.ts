import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { Saving } from '../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { SavingService } from './SavingService'
import { SavingValidInput } from './types/SavingValidInput'

@Resolver()
export class SavingResolver {
  constructor(private savingService = new SavingService()) {}

  @Query(() => [Saving])
  @UseMiddleware(isAuth)
  async savingsQuery(@Ctx() { req }: MyContext): Promise<Saving[]> {
    return this.savingService.findSavings(req.user.id)
  }

  @Mutation(() => Saving)
  @UseMiddleware(isAuth)
  async saveSavingMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: SavingValidInput
  ): Promise<Saving> {
    return this.savingService.saveSaving(data, req.user.id)
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
