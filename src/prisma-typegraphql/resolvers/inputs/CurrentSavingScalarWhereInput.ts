import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CurrentSavingScalarWhereInput", {
  isAbstract: true
})
export class CurrentSavingScalarWhereInput {
  @TypeGraphQL.Field(_type => [CurrentSavingScalarWhereInput], {
    nullable: true
  })
  AND?: CurrentSavingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingScalarWhereInput], {
    nullable: true
  })
  OR?: CurrentSavingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingScalarWhereInput], {
    nullable: true
  })
  NOT?: CurrentSavingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  value?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
