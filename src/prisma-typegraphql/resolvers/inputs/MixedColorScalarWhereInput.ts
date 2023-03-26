import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MixedColorScalarWhereInput", {
  isAbstract: true
})
export class MixedColorScalarWhereInput {
  @TypeGraphQL.Field(_type => [MixedColorScalarWhereInput], {
    nullable: true
  })
  AND?: MixedColorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorScalarWhereInput], {
    nullable: true
  })
  OR?: MixedColorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorScalarWhereInput], {
    nullable: true
  })
  NOT?: MixedColorScalarWhereInput[] | undefined;

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
