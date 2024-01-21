import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ColorProportionScalarWhereInput", {
  isAbstract: true
})
export class ColorProportionScalarWhereInput {
  @TypeGraphQL.Field(_type => [ColorProportionScalarWhereInput], {
    nullable: true
  })
  AND?: ColorProportionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionScalarWhereInput], {
    nullable: true
  })
  OR?: ColorProportionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionScalarWhereInput], {
    nullable: true
  })
  NOT?: ColorProportionScalarWhereInput[] | undefined;

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
  mixedColorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  rawColorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  proportion?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
