import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("NhAuthorScalarWhereInput", {
  isAbstract: true
})
export class NhAuthorScalarWhereInput {
  @TypeGraphQL.Field(_type => [NhAuthorScalarWhereInput], {
    nullable: true
  })
  AND?: NhAuthorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorScalarWhereInput], {
    nullable: true
  })
  OR?: NhAuthorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorScalarWhereInput], {
    nullable: true
  })
  NOT?: NhAuthorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  checkedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
