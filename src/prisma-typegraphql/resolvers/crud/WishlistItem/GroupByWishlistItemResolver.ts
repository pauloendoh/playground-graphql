import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWishlistItemArgs } from "./args/GroupByWishlistItemArgs";
import { WishlistItem } from "../../../models/WishlistItem";
import { WishlistItemGroupBy } from "../../outputs/WishlistItemGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WishlistItem)
export class GroupByWishlistItemResolver {
  @TypeGraphQL.Query(_returns => [WishlistItemGroupBy], {
    nullable: false
  })
  async groupByWishlistItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWishlistItemArgs): Promise<WishlistItemGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wishlistItem.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
