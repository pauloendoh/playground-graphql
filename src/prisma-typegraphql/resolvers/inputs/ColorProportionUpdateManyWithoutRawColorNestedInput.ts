import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateManyRawColorInputEnvelope } from "../inputs/ColorProportionCreateManyRawColorInputEnvelope";
import { ColorProportionCreateOrConnectWithoutRawColorInput } from "../inputs/ColorProportionCreateOrConnectWithoutRawColorInput";
import { ColorProportionCreateWithoutRawColorInput } from "../inputs/ColorProportionCreateWithoutRawColorInput";
import { ColorProportionScalarWhereInput } from "../inputs/ColorProportionScalarWhereInput";
import { ColorProportionUpdateManyWithWhereWithoutRawColorInput } from "../inputs/ColorProportionUpdateManyWithWhereWithoutRawColorInput";
import { ColorProportionUpdateWithWhereUniqueWithoutRawColorInput } from "../inputs/ColorProportionUpdateWithWhereUniqueWithoutRawColorInput";
import { ColorProportionUpsertWithWhereUniqueWithoutRawColorInput } from "../inputs/ColorProportionUpsertWithWhereUniqueWithoutRawColorInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionUpdateManyWithoutRawColorNestedInput", {
  isAbstract: true
})
export class ColorProportionUpdateManyWithoutRawColorNestedInput {
  @TypeGraphQL.Field(_type => [ColorProportionCreateWithoutRawColorInput], {
    nullable: true
  })
  create?: ColorProportionCreateWithoutRawColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionCreateOrConnectWithoutRawColorInput], {
    nullable: true
  })
  connectOrCreate?: ColorProportionCreateOrConnectWithoutRawColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionUpsertWithWhereUniqueWithoutRawColorInput], {
    nullable: true
  })
  upsert?: ColorProportionUpsertWithWhereUniqueWithoutRawColorInput[] | undefined;

  @TypeGraphQL.Field(_type => ColorProportionCreateManyRawColorInputEnvelope, {
    nullable: true
  })
  createMany?: ColorProportionCreateManyRawColorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ColorProportionUpdateWithWhereUniqueWithoutRawColorInput], {
    nullable: true
  })
  update?: ColorProportionUpdateWithWhereUniqueWithoutRawColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionUpdateManyWithWhereWithoutRawColorInput], {
    nullable: true
  })
  updateMany?: ColorProportionUpdateManyWithWhereWithoutRawColorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ColorProportionScalarWhereInput[] | undefined;
}
