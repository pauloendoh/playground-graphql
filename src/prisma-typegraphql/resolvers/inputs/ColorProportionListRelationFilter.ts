import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionWhereInput } from "../inputs/ColorProportionWhereInput";

@TypeGraphQL.InputType("ColorProportionListRelationFilter", {
  isAbstract: true
})
export class ColorProportionListRelationFilter {
  @TypeGraphQL.Field(_type => ColorProportionWhereInput, {
    nullable: true
  })
  every?: ColorProportionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ColorProportionWhereInput, {
    nullable: true
  })
  some?: ColorProportionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ColorProportionWhereInput, {
    nullable: true
  })
  none?: ColorProportionWhereInput | undefined;
}
