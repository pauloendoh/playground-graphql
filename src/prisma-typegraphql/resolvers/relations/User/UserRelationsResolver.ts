import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { Expense } from "../../../models/Expense";
import { Issue } from "../../../models/Issue";
import { Recipe } from "../../../models/Recipe";
import { Salary } from "../../../models/Salary";
import { Saving } from "../../../models/Saving";
import { User } from "../../../models/User";
import { WishlistItem } from "../../../models/WishlistItem";
import { UserCategoriesArgs } from "./args/UserCategoriesArgs";
import { UserExpensesArgs } from "./args/UserExpensesArgs";
import { UserIssuesArgs } from "./args/UserIssuesArgs";
import { UserRecipeArgs } from "./args/UserRecipeArgs";
import { UserSavingsArgs } from "./args/UserSavingsArgs";
import { UserWishlistItemsArgs } from "./args/UserWishlistItemsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Recipe], {
    nullable: false
  })
  async recipe(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRecipeArgs): Promise<Recipe[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).recipe(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Saving], {
    nullable: false
  })
  async savings(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSavingsArgs): Promise<Saving[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).savings(args);
  }

  @TypeGraphQL.FieldResolver(_type => [WishlistItem], {
    nullable: false
  })
  async wishlistItems(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserWishlistItemsArgs): Promise<WishlistItem[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).wishlistItems(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Expense], {
    nullable: false
  })
  async expenses(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserExpensesArgs): Promise<Expense[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).expenses(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Category], {
    nullable: false
  })
  async categories(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCategoriesArgs): Promise<Category[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).categories(args);
  }

  @TypeGraphQL.FieldResolver(_type => Salary, {
    nullable: true
  })
  async salary(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Salary | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).salary({});
  }

  @TypeGraphQL.FieldResolver(_type => [Issue], {
    nullable: false
  })
  async issues(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserIssuesArgs): Promise<Issue[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).issues(args);
  }
}
