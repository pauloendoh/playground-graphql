import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCountOrderByAggregateInput } from "../inputs/NhAuthorCountOrderByAggregateInput";
import { NhAuthorMaxOrderByAggregateInput } from "../inputs/NhAuthorMaxOrderByAggregateInput";
import { NhAuthorMinOrderByAggregateInput } from "../inputs/NhAuthorMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NhAuthorOrderByWithAggregationInput", {
  isAbstract: true
})
export class NhAuthorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  checkedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NhAuthorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NhAuthorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NhAuthorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NhAuthorMinOrderByAggregateInput | undefined;
}
