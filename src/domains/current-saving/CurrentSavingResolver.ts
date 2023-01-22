import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { CurrentSaving, Recipe } from '../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { CurrentSavingService } from './CurrentSavingService'
import { CurrentSavingValidInput } from './types/CurrentExpenseValidInput'

@Resolver()
export class CurrentExpenseResolver {
  constructor(private savingService = new CurrentSavingService()) {}

  @Query(() => [Recipe])
  @UseMiddleware(isAuth)
  async getRecipesQuery(@Ctx() { req }: MyContext): Promise<Recipe[]> {
    return [new Recipe()]
  }

  @Mutation(() => CurrentSaving)
  @UseMiddleware(isAuth)
  async saveCurrentSavingMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: CurrentSavingValidInput
  ) {
    return this.savingService.saveCurrentExpense(data, req.user.id)
  }
}
