import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateManyRawColorInputEnvelope } from "../inputs/ColorProportionCreateManyRawColorInputEnvelope";
import { ColorProportionCreateOrConnectWithoutRawColorInput } from "../inputs/ColorProportionCreateOrConnectWithoutRawColorInput";
import { ColorProportionCreateWithoutRawColorInput } from "../inputs/ColorProportionCreateWithoutRawColorInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionCreateNestedManyWithoutRawColorInput", {
  isAbstract: true
})
export class ColorProportionCreateNestedManyWithoutRawColorInput {
  @TypeGraphQL.Field(_type => [ColorProportionCreateWithoutRawColorInput], {
    nullable: true
  })
  create?: ColorProportionCreateWithoutRawColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionCreateOrConnectWithoutRawColorInput], {
    nullable: true
  })
  connectOrCreate?: ColorProportionCreateOrConnectWithoutRawColorInput[] | undefined;

  @TypeGraphQL.Field(_type => ColorProportionCreateManyRawColorInputEnvelope, {
    nullable: true
  })
  createMany?: ColorProportionCreateManyRawColorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionWhereUniqueInput], {
    nullable: true
  })
  connect?: ColorProportionWhereUniqueInput[] | undefined;
}
