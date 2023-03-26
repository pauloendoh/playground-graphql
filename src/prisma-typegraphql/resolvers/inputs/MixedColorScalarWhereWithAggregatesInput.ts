import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MixedColorScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MixedColorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MixedColorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MixedColorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MixedColorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MixedColorScalarWhereWithAggregatesInput[] | undefined;

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
  color?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
