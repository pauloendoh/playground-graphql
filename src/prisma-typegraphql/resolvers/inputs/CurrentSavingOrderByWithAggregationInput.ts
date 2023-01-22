import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingAvgOrderByAggregateInput } from "../inputs/CurrentSavingAvgOrderByAggregateInput";
import { CurrentSavingCountOrderByAggregateInput } from "../inputs/CurrentSavingCountOrderByAggregateInput";
import { CurrentSavingMaxOrderByAggregateInput } from "../inputs/CurrentSavingMaxOrderByAggregateInput";
import { CurrentSavingMinOrderByAggregateInput } from "../inputs/CurrentSavingMinOrderByAggregateInput";
import { CurrentSavingSumOrderByAggregateInput } from "../inputs/CurrentSavingSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CurrentSavingOrderByWithAggregationInput", {
  isAbstract: true
})
export class CurrentSavingOrderByWithAggregationInput {
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
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CurrentSavingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CurrentSavingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CurrentSavingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CurrentSavingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CurrentSavingSumOrderByAggregateInput | undefined;
}
