import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseAvgOrderByAggregateInput } from "../inputs/ExpenseAvgOrderByAggregateInput";
import { ExpenseCountOrderByAggregateInput } from "../inputs/ExpenseCountOrderByAggregateInput";
import { ExpenseMaxOrderByAggregateInput } from "../inputs/ExpenseMaxOrderByAggregateInput";
import { ExpenseMinOrderByAggregateInput } from "../inputs/ExpenseMinOrderByAggregateInput";
import { ExpenseSumOrderByAggregateInput } from "../inputs/ExpenseSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExpenseOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExpenseOrderByWithAggregationInput {
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
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExpenseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExpenseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpenseAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ExpenseAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpenseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExpenseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpenseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExpenseMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpenseSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ExpenseSumOrderByAggregateInput | undefined;
}
