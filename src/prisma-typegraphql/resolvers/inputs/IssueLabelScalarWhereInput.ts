import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IssueLabelScalarWhereInput", {
  isAbstract: true
})
export class IssueLabelScalarWhereInput {
  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
    nullable: true
  })
  AND?: IssueLabelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
    nullable: true
  })
  OR?: IssueLabelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
    nullable: true
  })
  NOT?: IssueLabelScalarWhereInput[] | undefined;

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
  bgColor?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
