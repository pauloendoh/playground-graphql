import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionUpdateWithoutRawColorInput } from "../inputs/ColorProportionUpdateWithoutRawColorInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionUpdateWithWhereUniqueWithoutRawColorInput", {
  isAbstract: true
})
export class ColorProportionUpdateWithWhereUniqueWithoutRawColorInput {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ColorProportionUpdateWithoutRawColorInput, {
    nullable: false
  })
  data!: ColorProportionUpdateWithoutRawColorInput;
}
