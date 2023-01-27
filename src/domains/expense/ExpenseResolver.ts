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
import { PaginationInput } from './types/PaginationInput'

@Resolver()
export class ExpenseResolver {
  constructor(private expenseService = new ExpenseService()) {}

  @Query(() => [Expense])
  @UseMiddleware(isAuth)
  async expensesQuery(
    @Ctx() { req }: MyContext,
    @Arg('pagination', { nullable: true }) pagination: PaginationInput
  ): Promise<Expense[]> {
    return this.expenseService.findExpenses(req.user.id, pagination)
  }

  @Mutation(() => Expense)
  @UseMiddleware(isAuth)
  async saveExpenseMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: ExpenseInput
  ): Promise<Expense> {
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
