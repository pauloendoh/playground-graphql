import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateManyMixedColorInputEnvelope } from "../inputs/ColorProportionCreateManyMixedColorInputEnvelope";
import { ColorProportionCreateOrConnectWithoutMixedColorInput } from "../inputs/ColorProportionCreateOrConnectWithoutMixedColorInput";
import { ColorProportionCreateWithoutMixedColorInput } from "../inputs/ColorProportionCreateWithoutMixedColorInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionCreateNestedManyWithoutMixedColorInput", {
  isAbstract: true
})
export class ColorProportionCreateNestedManyWithoutMixedColorInput {
  @TypeGraphQL.Field(_type => [ColorProportionCreateWithoutMixedColorInput], {
    nullable: true
  })
  create?: ColorProportionCreateWithoutMixedColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionCreateOrConnectWithoutMixedColorInput], {
    nullable: true
  })
  connectOrCreate?: ColorProportionCreateOrConnectWithoutMixedColorInput[] | undefined;

  @TypeGraphQL.Field(_type => ColorProportionCreateManyMixedColorInputEnvelope, {
    nullable: true
  })
  createMany?: ColorProportionCreateManyMixedColorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionWhereUniqueInput], {
    nullable: true
  })
  connect?: ColorProportionWhereUniqueInput[] | undefined;
}
