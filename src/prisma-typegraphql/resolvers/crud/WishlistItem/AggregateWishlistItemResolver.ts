import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWishlistItemArgs } from "./args/AggregateWishlistItemArgs";
import { WishlistItem } from "../../../models/WishlistItem";
import { AggregateWishlistItem } from "../../outputs/AggregateWishlistItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => WishlistItem)
export class AggregateWishlistItemResolver {
  @TypeGraphQL.Query(_returns => AggregateWishlistItem, {
    nullable: false
  })
  async aggregateWishlistItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWishlistItemArgs): Promise<AggregateWishlistItem> {
    return getPrismaFromContext(ctx).wishlistItem.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
