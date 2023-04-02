import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueAvgOrderByAggregateInput } from "../inputs/IssueAvgOrderByAggregateInput";
import { IssueCountOrderByAggregateInput } from "../inputs/IssueCountOrderByAggregateInput";
import { IssueMaxOrderByAggregateInput } from "../inputs/IssueMaxOrderByAggregateInput";
import { IssueMinOrderByAggregateInput } from "../inputs/IssueMinOrderByAggregateInput";
import { IssueSumOrderByAggregateInput } from "../inputs/IssueSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IssueOrderByWithAggregationInput", {
  isAbstract: true
})
export class IssueOrderByWithAggregationInput {
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
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  solvedPosition?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  solution?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isSolved?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  solvedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  frequency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  intensity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IssueCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IssueCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: IssueAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IssueMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IssueMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: IssueSumOrderByAggregateInput | undefined;
}
