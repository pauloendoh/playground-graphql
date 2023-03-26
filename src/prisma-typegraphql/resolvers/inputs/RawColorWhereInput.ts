import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionListRelationFilter } from "../inputs/ColorProportionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("RawColorWhereInput", {
  isAbstract: true
})
export class RawColorWhereInput {
  @TypeGraphQL.Field(_type => [RawColorWhereInput], {
    nullable: true
  })
  AND?: RawColorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorWhereInput], {
    nullable: true
  })
  OR?: RawColorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorWhereInput], {
    nullable: true
  })
  NOT?: RawColorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

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

  @TypeGraphQL.Field(_type => ColorProportionListRelationFilter, {
    nullable: true
  })
  colorProportions?: ColorProportionListRelationFilter | undefined;
}
