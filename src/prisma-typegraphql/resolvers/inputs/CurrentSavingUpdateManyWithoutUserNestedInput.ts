import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingCreateManyUserInputEnvelope } from "../inputs/CurrentSavingCreateManyUserInputEnvelope";
import { CurrentSavingCreateOrConnectWithoutUserInput } from "../inputs/CurrentSavingCreateOrConnectWithoutUserInput";
import { CurrentSavingCreateWithoutUserInput } from "../inputs/CurrentSavingCreateWithoutUserInput";
import { CurrentSavingScalarWhereInput } from "../inputs/CurrentSavingScalarWhereInput";
import { CurrentSavingUpdateManyWithWhereWithoutUserInput } from "../inputs/CurrentSavingUpdateManyWithWhereWithoutUserInput";
import { CurrentSavingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CurrentSavingUpdateWithWhereUniqueWithoutUserInput";
import { CurrentSavingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CurrentSavingUpsertWithWhereUniqueWithoutUserInput";
import { CurrentSavingWhereUniqueInput } from "../inputs/CurrentSavingWhereUniqueInput";

@TypeGraphQL.InputType("CurrentSavingUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class CurrentSavingUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [CurrentSavingCreateWithoutUserInput], {
    nullable: true
  })
  create?: CurrentSavingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CurrentSavingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CurrentSavingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CurrentSavingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingWhereUniqueInput], {
    nullable: true
  })
  set?: CurrentSavingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CurrentSavingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingWhereUniqueInput], {
    nullable: true
  })
  delete?: CurrentSavingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingWhereUniqueInput], {
    nullable: true
  })
  connect?: CurrentSavingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CurrentSavingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CurrentSavingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CurrentSavingScalarWhereInput[] | undefined;
}
