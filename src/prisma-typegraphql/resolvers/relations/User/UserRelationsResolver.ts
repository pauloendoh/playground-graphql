import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { CurrentSaving } from "../../../models/CurrentSaving";
import { Expense } from "../../../models/Expense";
import { Recipe } from "../../../models/Recipe";
import { User } from "../../../models/User";
import { WishlistItem } from "../../../models/WishlistItem";
import { UserCategoriesArgs } from "./args/UserCategoriesArgs";
import { UserCurrentSavingsArgs } from "./args/UserCurrentSavingsArgs";
import { UserExpensesArgs } from "./args/UserExpensesArgs";
import { UserRecipeArgs } from "./args/UserRecipeArgs";
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

  @TypeGraphQL.FieldResolver(_type => [CurrentSaving], {
    nullable: false
  })
  async currentSavings(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCurrentSavingsArgs): Promise<CurrentSaving[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).currentSavings(args);
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
}
