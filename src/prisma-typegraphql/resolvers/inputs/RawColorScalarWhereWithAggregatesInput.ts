import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RawColorScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RawColorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RawColorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RawColorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RawColorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RawColorScalarWhereWithAggregatesInput[] | undefined;

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
