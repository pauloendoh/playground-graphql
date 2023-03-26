import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCreateManyUserInputEnvelope } from "../inputs/MixedColorCreateManyUserInputEnvelope";
import { MixedColorCreateOrConnectWithoutUserInput } from "../inputs/MixedColorCreateOrConnectWithoutUserInput";
import { MixedColorCreateWithoutUserInput } from "../inputs/MixedColorCreateWithoutUserInput";
import { MixedColorScalarWhereInput } from "../inputs/MixedColorScalarWhereInput";
import { MixedColorUpdateManyWithWhereWithoutUserInput } from "../inputs/MixedColorUpdateManyWithWhereWithoutUserInput";
import { MixedColorUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MixedColorUpdateWithWhereUniqueWithoutUserInput";
import { MixedColorUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MixedColorUpsertWithWhereUniqueWithoutUserInput";
import { MixedColorWhereUniqueInput } from "../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.InputType("MixedColorUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class MixedColorUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [MixedColorCreateWithoutUserInput], {
    nullable: true
  })
  create?: MixedColorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MixedColorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MixedColorUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MixedColorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MixedColorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MixedColorWhereUniqueInput], {
    nullable: true
  })
  set?: MixedColorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MixedColorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorWhereUniqueInput], {
    nullable: true
  })
  delete?: MixedColorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorWhereUniqueInput], {
    nullable: true
  })
  connect?: MixedColorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MixedColorUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MixedColorUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MixedColorScalarWhereInput[] | undefined;
}
