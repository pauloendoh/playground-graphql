import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateManyUserInputEnvelope } from "../inputs/ColorProportionCreateManyUserInputEnvelope";
import { ColorProportionCreateOrConnectWithoutUserInput } from "../inputs/ColorProportionCreateOrConnectWithoutUserInput";
import { ColorProportionCreateWithoutUserInput } from "../inputs/ColorProportionCreateWithoutUserInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ColorProportionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ColorProportionCreateWithoutUserInput], {
    nullable: true
  })
  create?: ColorProportionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ColorProportionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ColorProportionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ColorProportionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionWhereUniqueInput], {
    nullable: true
  })
  connect?: ColorProportionWhereUniqueInput[] | undefined;
}
