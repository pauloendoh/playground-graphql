import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemAvgAggregate } from "../outputs/WishlistItemAvgAggregate";
import { WishlistItemCountAggregate } from "../outputs/WishlistItemCountAggregate";
import { WishlistItemMaxAggregate } from "../outputs/WishlistItemMaxAggregate";
import { WishlistItemMinAggregate } from "../outputs/WishlistItemMinAggregate";
import { WishlistItemSumAggregate } from "../outputs/WishlistItemSumAggregate";

@TypeGraphQL.ObjectType("AggregateWishlistItem", {
  isAbstract: true
})
export class AggregateWishlistItem {
  @TypeGraphQL.Field(_type => WishlistItemCountAggregate, {
    nullable: true
  })
  _count!: WishlistItemCountAggregate | null;

  @TypeGraphQL.Field(_type => WishlistItemAvgAggregate, {
    nullable: true
  })
  _avg!: WishlistItemAvgAggregate | null;

  @TypeGraphQL.Field(_type => WishlistItemSumAggregate, {
    nullable: true
  })
  _sum!: WishlistItemSumAggregate | null;

  @TypeGraphQL.Field(_type => WishlistItemMinAggregate, {
    nullable: true
  })
  _min!: WishlistItemMinAggregate | null;

  @TypeGraphQL.Field(_type => WishlistItemMaxAggregate, {
    nullable: true
  })
  _max!: WishlistItemMaxAggregate | null;
}
