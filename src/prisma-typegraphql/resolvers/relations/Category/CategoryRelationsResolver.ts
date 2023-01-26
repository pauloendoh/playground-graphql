import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Expense } from "../../../models/Expense";
import { User } from "../../../models/User";
import { CategoryExpensesArgs } from "./args/CategoryExpensesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).category.findUnique({
      where: {
        id: category.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Expense], {
    nullable: false
  })
  async expenses(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryExpensesArgs): Promise<Expense[]> {
    return getPrismaFromContext(ctx).category.findUnique({
      where: {
        id: category.id,
      },
    }).expenses(args);
  }
}
