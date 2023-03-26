import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCountOrderByAggregateInput } from "../inputs/MixedColorCountOrderByAggregateInput";
import { MixedColorMaxOrderByAggregateInput } from "../inputs/MixedColorMaxOrderByAggregateInput";
import { MixedColorMinOrderByAggregateInput } from "../inputs/MixedColorMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MixedColorOrderByWithAggregationInput", {
  isAbstract: true
})
export class MixedColorOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  color?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MixedColorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MixedColorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MixedColorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MixedColorMinOrderByAggregateInput | undefined;
}
