import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionUpdateWithoutUserInput } from "../inputs/ColorProportionUpdateWithoutUserInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ColorProportionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ColorProportionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ColorProportionUpdateWithoutUserInput;
}
