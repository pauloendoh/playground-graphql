import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Expense } from "../../../models/Expense";
import { User } from "../../../models/User";
import { ExpenseCategoriesArgs } from "./args/ExpenseCategoriesArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Category], {
    nullable: false
  })
  async categories(@TypeGraphQL.Root() expense: Expense, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ExpenseCategoriesArgs): Promise<Category[]> {
    return getPrismaFromContext(ctx).expense.findUnique({
      where: {
        id: expense.id,
      },
    }).categories(args);
  }
}
