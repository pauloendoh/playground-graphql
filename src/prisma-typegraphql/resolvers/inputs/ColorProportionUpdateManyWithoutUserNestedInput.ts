import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateManyUserInputEnvelope } from "../inputs/ColorProportionCreateManyUserInputEnvelope";
import { ColorProportionCreateOrConnectWithoutUserInput } from "../inputs/ColorProportionCreateOrConnectWithoutUserInput";
import { ColorProportionCreateWithoutUserInput } from "../inputs/ColorProportionCreateWithoutUserInput";
import { ColorProportionScalarWhereInput } from "../inputs/ColorProportionScalarWhereInput";
import { ColorProportionUpdateManyWithWhereWithoutUserInput } from "../inputs/ColorProportionUpdateManyWithWhereWithoutUserInput";
import { ColorProportionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ColorProportionUpdateWithWhereUniqueWithoutUserInput";
import { ColorProportionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ColorProportionUpsertWithWhereUniqueWithoutUserInput";
import { ColorProportionWhereUniqueInput } from "../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.InputType("ColorProportionUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class ColorProportionUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ColorProportionCreateWithoutUserInput], {
    nullable: true
  })
  create?: ColorProportionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ColorProportionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ColorProportionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ColorProportionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ColorProportionCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ColorProportionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ColorProportionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ColorProportionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ColorProportionScalarWhereInput[] | undefined;
}
