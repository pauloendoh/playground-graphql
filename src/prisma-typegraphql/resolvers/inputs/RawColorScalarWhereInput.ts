import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RawColorScalarWhereInput", {
  isAbstract: true
})
export class RawColorScalarWhereInput {
  @TypeGraphQL.Field(_type => [RawColorScalarWhereInput], {
    nullable: true
  })
  AND?: RawColorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorScalarWhereInput], {
    nullable: true
  })
  OR?: RawColorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorScalarWhereInput], {
    nullable: true
  })
  NOT?: RawColorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  color?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
