import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWishlistItemOrThrowArgs } from "./args/FindUniqueWishlistItemOrThrowArgs";
import { WishlistItem } from "../../../models/WishlistItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WishlistItem)
export class FindUniqueWishlistItemOrThrowResolver {
  @TypeGraphQL.Query(_returns => WishlistItem, {
    nullable: true
  })
  async getWishlistItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWishlistItemOrThrowArgs): Promise<WishlistItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wishlistItem.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
