import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { Expense } from '../../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { ExpenseService } from './ExpenseService'
import { ExpenseFilterInput } from './types/ExpenseFilterInput'
import { ExpenseInput } from './types/ExpenseInput'
import { PaginationInput } from './types/PaginationInput'

@Resolver()
export class ExpenseResolver {
  constructor(private readonly expenseService = new ExpenseService()) {}

  @Query(() => [Expense])
  @UseMiddleware(isAuth)
  async expensesQuery(
    @Ctx() { req }: MyContext,
    @Arg('pagination', { nullable: true }) pagination: PaginationInput,
    @Arg('filter', { nullable: true }) filter?: ExpenseFilterInput
  ): Promise<Expense[]> {
    return this.expenseService.findMany({
      userId: req.user.id,
      pagination,
      filter,
    })
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

  @Query(() => [Expense])
  @UseMiddleware(isAuth)
  async recurrentExpensesQuery(@Ctx() { req }: MyContext): Promise<Expense[]> {
    return this.expenseService.findRecurrentExpenses(req.user.id)
  }
}
