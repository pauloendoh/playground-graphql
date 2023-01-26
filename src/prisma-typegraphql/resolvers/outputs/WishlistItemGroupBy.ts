import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemAvgAggregate } from "../outputs/WishlistItemAvgAggregate";
import { WishlistItemCountAggregate } from "../outputs/WishlistItemCountAggregate";
import { WishlistItemMaxAggregate } from "../outputs/WishlistItemMaxAggregate";
import { WishlistItemMinAggregate } from "../outputs/WishlistItemMinAggregate";
import { WishlistItemSumAggregate } from "../outputs/WishlistItemSumAggregate";

@TypeGraphQL.ObjectType("WishlistItemGroupBy", {
  isAbstract: true
})
export class WishlistItemGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  itemName!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  priceInThousands!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
