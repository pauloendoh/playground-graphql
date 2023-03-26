import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateWithoutMixedColorInput } from "../inputs/ColorProportionCreateWithoutMixedColorInput";
import { ColorProportionUpdateWithoutMixedColorInput } from "../inputs/ColorProportionUpdateWithoutMixedColorInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionUpsertWithWhereUniqueWithoutMixedColorInput", {
  isAbstract: true
})
export class ColorProportionUpsertWithWhereUniqueWithoutMixedColorInput {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ColorProportionUpdateWithoutMixedColorInput, {
    nullable: false
  })
  update!: ColorProportionUpdateWithoutMixedColorInput;

  @TypeGraphQL.Field(_type => ColorProportionCreateWithoutMixedColorInput, {
    nullable: false
  })
  create!: ColorProportionCreateWithoutMixedColorInput;
}
