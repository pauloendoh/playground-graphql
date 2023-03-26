import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateWithoutUserInput } from "../inputs/ColorProportionCreateWithoutUserInput";
import { ColorProportionUpdateWithoutUserInput } from "../inputs/ColorProportionUpdateWithoutUserInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ColorProportionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ColorProportionUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ColorProportionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ColorProportionCreateWithoutUserInput, {
    nullable: false
  })
  create!: ColorProportionCreateWithoutUserInput;
}
