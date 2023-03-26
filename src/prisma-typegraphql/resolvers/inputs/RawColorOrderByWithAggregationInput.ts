import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCountOrderByAggregateInput } from "../inputs/RawColorCountOrderByAggregateInput";
import { RawColorMaxOrderByAggregateInput } from "../inputs/RawColorMaxOrderByAggregateInput";
import { RawColorMinOrderByAggregateInput } from "../inputs/RawColorMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RawColorOrderByWithAggregationInput", {
  isAbstract: true
})
export class RawColorOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => RawColorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RawColorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RawColorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RawColorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RawColorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RawColorMinOrderByAggregateInput | undefined;
}
