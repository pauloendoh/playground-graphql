import * as TypeGraphQL from "type-graphql";
import { Expense } from "../../../models/Expense";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Expense)
export class ExpenseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() expense: Expense, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).expense.findUnique({
      where: {
        id: expense.id,
      },
    }).user({});
  }
}
