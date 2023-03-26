import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { MixedColorRelationFilter } from "../inputs/MixedColorRelationFilter";
import { RawColorRelationFilter } from "../inputs/RawColorRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ColorProportionWhereInput", {
  isAbstract: true
})
export class ColorProportionWhereInput {
  @TypeGraphQL.Field(_type => [ColorProportionWhereInput], {
    nullable: true
  })
  AND?: ColorProportionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionWhereInput], {
    nullable: true
  })
  OR?: ColorProportionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionWhereInput], {
    nullable: true
  })
  NOT?: ColorProportionWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => MixedColorRelationFilter, {
    nullable: true
  })
  mixedColor?: MixedColorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mixedColorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => RawColorRelationFilter, {
    nullable: true
  })
  rawColor?: RawColorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  rawColorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  proportion?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
