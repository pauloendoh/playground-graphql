import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateManyMixedColorInputEnvelope } from "../inputs/ColorProportionCreateManyMixedColorInputEnvelope";
import { ColorProportionCreateOrConnectWithoutMixedColorInput } from "../inputs/ColorProportionCreateOrConnectWithoutMixedColorInput";
import { ColorProportionCreateWithoutMixedColorInput } from "../inputs/ColorProportionCreateWithoutMixedColorInput";
import { ColorProportionScalarWhereInput } from "../inputs/ColorProportionScalarWhereInput";
import { ColorProportionUpdateManyWithWhereWithoutMixedColorInput } from "../inputs/ColorProportionUpdateManyWithWhereWithoutMixedColorInput";
import { ColorProportionUpdateWithWhereUniqueWithoutMixedColorInput } from "../inputs/ColorProportionUpdateWithWhereUniqueWithoutMixedColorInput";
import { ColorProportionUpsertWithWhereUniqueWithoutMixedColorInput } from "../inputs/ColorProportionUpsertWithWhereUniqueWithoutMixedColorInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionUpdateManyWithoutMixedColorNestedInput", {
  isAbstract: true
})
export class ColorProportionUpdateManyWithoutMixedColorNestedInput {
  @TypeGraphQL.Field(_type => [ColorProportionCreateWithoutMixedColorInput], {
    nullable: true
  })
  create?: ColorProportionCreateWithoutMixedColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionCreateOrConnectWithoutMixedColorInput], {
    nullable: true
  })
  connectOrCreate?: ColorProportionCreateOrConnectWithoutMixedColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionUpsertWithWhereUniqueWithoutMixedColorInput], {
    nullable: true
  })
  upsert?: ColorProportionUpsertWithWhereUniqueWithoutMixedColorInput[] | undefined;

  @TypeGraphQL.Field(_type => ColorProportionCreateManyMixedColorInputEnvelope, {
    nullable: true
  })
  createMany?: ColorProportionCreateManyMixedColorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionWhereUniqueInput], {
    nullable: true
  })
  set?: ColorProportionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ColorProportionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionWhereUniqueInput], {
    nullable: true
  })
  delete?: ColorProportionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionWhereUniqueInput], {
    nullable: true
  })
  connect?: ColorProportionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionUpdateWithWhereUniqueWithoutMixedColorInput], {
    nullable: true
  })
  update?: ColorProportionUpdateWithWhereUniqueWithoutMixedColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionUpdateManyWithWhereWithoutMixedColorInput], {
    nullable: true
  })
  updateMany?: ColorProportionUpdateManyWithWhereWithoutMixedColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ColorProportionScalarWhereInput[] | undefined;
}
