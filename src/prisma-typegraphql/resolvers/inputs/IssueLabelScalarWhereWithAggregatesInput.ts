import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IssueLabelScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class IssueLabelScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IssueLabelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IssueLabelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IssueLabelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  bgColor?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
