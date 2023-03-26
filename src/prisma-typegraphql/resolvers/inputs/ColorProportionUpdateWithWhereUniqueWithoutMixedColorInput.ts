import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionUpdateWithoutMixedColorInput } from "../inputs/ColorProportionUpdateWithoutMixedColorInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionUpdateWithWhereUniqueWithoutMixedColorInput", {
  isAbstract: true
})
export class ColorProportionUpdateWithWhereUniqueWithoutMixedColorInput {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ColorProportionUpdateWithoutMixedColorInput, {
    nullable: false
  })
  data!: ColorProportionUpdateWithoutMixedColorInput;
}
