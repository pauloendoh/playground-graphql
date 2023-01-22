import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { DecimalWithAggregatesFilter } from "../inputs/DecimalWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CurrentSavingScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CurrentSavingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CurrentSavingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CurrentSavingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CurrentSavingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CurrentSavingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalWithAggregatesFilter, {
    nullable: true
  })
  value?: DecimalWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
