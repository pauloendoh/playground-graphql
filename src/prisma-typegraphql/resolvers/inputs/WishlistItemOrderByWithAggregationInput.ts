import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemAvgOrderByAggregateInput } from "../inputs/WishlistItemAvgOrderByAggregateInput";
import { WishlistItemCountOrderByAggregateInput } from "../inputs/WishlistItemCountOrderByAggregateInput";
import { WishlistItemMaxOrderByAggregateInput } from "../inputs/WishlistItemMaxOrderByAggregateInput";
import { WishlistItemMinOrderByAggregateInput } from "../inputs/WishlistItemMinOrderByAggregateInput";
import { WishlistItemSumOrderByAggregateInput } from "../inputs/WishlistItemSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WishlistItemOrderByWithAggregationInput", {
  isAbstract: true
})
export class WishlistItemOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  itemName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priceInThousands?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WishlistItemCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WishlistItemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WishlistItemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WishlistItemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WishlistItemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WishlistItemSumOrderByAggregateInput | undefined;
}
