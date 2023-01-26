import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { Expense } from '../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { ExpenseService } from './ExpenseService'
import { ExpenseInput } from './types/ExpenseInput'

@Resolver()
export class ExpenseResolver {
  constructor(private expenseService = new ExpenseService()) {}

  @Query(() => [Expense])
  @UseMiddleware(isAuth)
  async expensesQuery(@Ctx() { req }: MyContext): Promise<Expense[]> {
    return this.expenseService.findExpenses(req.user.id)
  }

  @Mutation(() => Expense)
  @UseMiddleware(isAuth)
  async saveExpenseMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: ExpenseInput
  ) {
    return this.expenseService.saveExpense(data, req.user.id)
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteExpenseMutation(
    @Ctx() { req }: MyContext,
    @Arg('id') expenseId: string
  ): Promise<boolean> {
    return this.expenseService.deleteExpense(expenseId, req.user.id)
  }
}
