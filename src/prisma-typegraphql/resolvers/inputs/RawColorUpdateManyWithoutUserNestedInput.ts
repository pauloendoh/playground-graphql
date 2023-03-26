import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCreateManyUserInputEnvelope } from "../inputs/RawColorCreateManyUserInputEnvelope";
import { RawColorCreateOrConnectWithoutUserInput } from "../inputs/RawColorCreateOrConnectWithoutUserInput";
import { RawColorCreateWithoutUserInput } from "../inputs/RawColorCreateWithoutUserInput";
import { RawColorScalarWhereInput } from "../inputs/RawColorScalarWhereInput";
import { RawColorUpdateManyWithWhereWithoutUserInput } from "../inputs/RawColorUpdateManyWithWhereWithoutUserInput";
import { RawColorUpdateWithWhereUniqueWithoutUserInput } from "../inputs/RawColorUpdateWithWhereUniqueWithoutUserInput";
import { RawColorUpsertWithWhereUniqueWithoutUserInput } from "../inputs/RawColorUpsertWithWhereUniqueWithoutUserInput";
import { RawColorWhereUniqueInput } from "../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.InputType("RawColorUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class RawColorUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [RawColorCreateWithoutUserInput], {
    nullable: true
  })
  create?: RawColorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RawColorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: RawColorUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => RawColorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: RawColorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RawColorWhereUniqueInput], {
    nullable: true
  })
  set?: RawColorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RawColorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorWhereUniqueInput], {
    nullable: true
  })
  delete?: RawColorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorWhereUniqueInput], {
    nullable: true
  })
  connect?: RawColorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: RawColorUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: RawColorUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RawColorScalarWhereInput[] | undefined;
}
