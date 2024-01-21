import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ColorProportionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ColorProportionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ColorProportionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ColorProportionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ColorProportionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ColorProportionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  mixedColorId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  rawColorId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  proportion?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
