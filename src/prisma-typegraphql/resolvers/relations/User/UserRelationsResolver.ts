import * as TypeGraphQL from "type-graphql";
import { CurrentSaving } from "../../../models/CurrentSaving";
import { Recipe } from "../../../models/Recipe";
import { User } from "../../../models/User";
import { WishlistItem } from "../../../models/WishlistItem";
import { UserCurrentSavingsArgs } from "./args/UserCurrentSavingsArgs";
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
}
