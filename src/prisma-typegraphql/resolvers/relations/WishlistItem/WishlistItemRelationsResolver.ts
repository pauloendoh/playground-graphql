import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { WishlistItem } from "../../../models/WishlistItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WishlistItem)
export class WishlistItemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() wishlistItem: WishlistItem, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).wishlistItem.findUnique({
      where: {
        id: wishlistItem.id,
      },
    }).user({});
  }
}
