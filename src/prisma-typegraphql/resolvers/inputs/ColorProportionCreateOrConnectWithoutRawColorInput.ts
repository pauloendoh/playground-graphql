import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateWithoutRawColorInput } from "../inputs/ColorProportionCreateWithoutRawColorInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionCreateOrConnectWithoutRawColorInput", {
  isAbstract: true
})
export class ColorProportionCreateOrConnectWithoutRawColorInput {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ColorProportionCreateWithoutRawColorInput, {
    nullable: false
  })
  create!: ColorProportionCreateWithoutRawColorInput;
}
