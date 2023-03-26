import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionAvgOrderByAggregateInput } from "../inputs/ColorProportionAvgOrderByAggregateInput";
import { ColorProportionCountOrderByAggregateInput } from "../inputs/ColorProportionCountOrderByAggregateInput";
import { ColorProportionMaxOrderByAggregateInput } from "../inputs/ColorProportionMaxOrderByAggregateInput";
import { ColorProportionMinOrderByAggregateInput } from "../inputs/ColorProportionMinOrderByAggregateInput";
import { ColorProportionSumOrderByAggregateInput } from "../inputs/ColorProportionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ColorProportionOrderByWithAggregationInput", {
  isAbstract: true
})
export class ColorProportionOrderByWithAggregationInput {
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
  mixedColorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rawColorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  proportion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ColorProportionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ColorProportionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ColorProportionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ColorProportionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ColorProportionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ColorProportionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ColorProportionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ColorProportionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ColorProportionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ColorProportionSumOrderByAggregateInput | undefined;
}
