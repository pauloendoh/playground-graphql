import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCountOrderByAggregateInput } from "../inputs/NhFavoriteCountOrderByAggregateInput";
import { NhFavoriteMaxOrderByAggregateInput } from "../inputs/NhFavoriteMaxOrderByAggregateInput";
import { NhFavoriteMinOrderByAggregateInput } from "../inputs/NhFavoriteMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NhFavoriteOrderByWithAggregationInput", {
  isAbstract: true
})
export class NhFavoriteOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NhFavoriteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NhFavoriteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NhFavoriteMinOrderByAggregateInput | undefined;
}
