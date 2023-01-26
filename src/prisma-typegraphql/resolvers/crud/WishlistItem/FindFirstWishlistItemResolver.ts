import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWishlistItemArgs } from "./args/FindFirstWishlistItemArgs";
import { WishlistItem } from "../../../models/WishlistItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WishlistItem)
export class FindFirstWishlistItemResolver {
  @TypeGraphQL.Query(_returns => WishlistItem, {
    nullable: true
  })
  async findFirstWishlistItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWishlistItemArgs): Promise<WishlistItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wishlistItem.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
