import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("NhAuthorScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class NhAuthorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [NhAuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NhAuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NhAuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NhAuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  checkedAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
