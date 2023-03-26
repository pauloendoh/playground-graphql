import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateWithoutRawColorInput } from "../inputs/ColorProportionCreateWithoutRawColorInput";
import { ColorProportionUpdateWithoutRawColorInput } from "../inputs/ColorProportionUpdateWithoutRawColorInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionUpsertWithWhereUniqueWithoutRawColorInput", {
  isAbstract: true
})
export class ColorProportionUpsertWithWhereUniqueWithoutRawColorInput {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ColorProportionUpdateWithoutRawColorInput, {
    nullable: false
  })
  update!: ColorProportionUpdateWithoutRawColorInput;

  @TypeGraphQL.Field(_type => ColorProportionCreateWithoutRawColorInput, {
    nullable: false
  })
  create!: ColorProportionCreateWithoutRawColorInput;
}
