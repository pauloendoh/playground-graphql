import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateWithoutUserInput } from "../inputs/ColorProportionCreateWithoutUserInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ColorProportionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ColorProportionCreateWithoutUserInput, {
    nullable: false
  })
  create!: ColorProportionCreateWithoutUserInput;
}
