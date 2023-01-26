import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneWishlistItemArgs } from "./args/UpdateOneWishlistItemArgs";
import { WishlistItem } from "../../../models/WishlistItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WishlistItem)
export class UpdateOneWishlistItemResolver {
  @TypeGraphQL.Mutation(_returns => WishlistItem, {
    nullable: true
  })
  async updateOneWishlistItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWishlistItemArgs): Promise<WishlistItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wishlistItem.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
