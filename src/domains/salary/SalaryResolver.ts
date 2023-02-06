import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { Salary } from '../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { SalaryService } from './SalaryService'
import { SalaryValidInput } from './types/SalaryValidInput'

@Resolver()
export class SalaryResolver {
  constructor(private salaryService = new SalaryService()) {}

  @Query(() => Salary, { nullable: true })
  @UseMiddleware(isAuth)
  async salaryQuery(@Ctx() { req }: MyContext): Promise<Salary | null> {
    return this.salaryService.findUnique(req.user.id)
  }

  @Mutation(() => Salary)
  @UseMiddleware(isAuth)
  async saveSalaryMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: SalaryValidInput
  ): Promise<Salary> {
    return this.salaryService.save(data, req.user.id)
  }
}
