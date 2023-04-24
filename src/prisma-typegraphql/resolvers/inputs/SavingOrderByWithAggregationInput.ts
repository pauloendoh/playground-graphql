import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingAvgOrderByAggregateInput } from "../inputs/SavingAvgOrderByAggregateInput";
import { SavingCountOrderByAggregateInput } from "../inputs/SavingCountOrderByAggregateInput";
import { SavingMaxOrderByAggregateInput } from "../inputs/SavingMaxOrderByAggregateInput";
import { SavingMinOrderByAggregateInput } from "../inputs/SavingMinOrderByAggregateInput";
import { SavingSumOrderByAggregateInput } from "../inputs/SavingSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SavingOrderByWithAggregationInput", {
  isAbstract: true
})
export class SavingOrderByWithAggregationInput {
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
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  selectedAsAverageMonthlyGrowth?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SavingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SavingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SavingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SavingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SavingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SavingSumOrderByAggregateInput | undefined;
}
