import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateWithoutMixedColorInput } from "../inputs/ColorProportionCreateWithoutMixedColorInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionCreateOrConnectWithoutMixedColorInput", {
  isAbstract: true
})
export class ColorProportionCreateOrConnectWithoutMixedColorInput {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ColorProportionCreateWithoutMixedColorInput, {
    nullable: false
  })
  create!: ColorProportionCreateWithoutMixedColorInput;
}
