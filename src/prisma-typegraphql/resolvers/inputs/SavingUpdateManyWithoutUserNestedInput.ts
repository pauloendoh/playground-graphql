import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingCreateManyUserInputEnvelope } from "../inputs/SavingCreateManyUserInputEnvelope";
import { SavingCreateOrConnectWithoutUserInput } from "../inputs/SavingCreateOrConnectWithoutUserInput";
import { SavingCreateWithoutUserInput } from "../inputs/SavingCreateWithoutUserInput";
import { SavingScalarWhereInput } from "../inputs/SavingScalarWhereInput";
import { SavingUpdateManyWithWhereWithoutUserInput } from "../inputs/SavingUpdateManyWithWhereWithoutUserInput";
import { SavingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SavingUpdateWithWhereUniqueWithoutUserInput";
import { SavingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SavingUpsertWithWhereUniqueWithoutUserInput";
import { SavingWhereUniqueInput } from "../inputs/SavingWhereUniqueInput";

@TypeGraphQL.InputType("SavingUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class SavingUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [SavingCreateWithoutUserInput], {
    nullable: true
  })
  create?: SavingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SavingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SavingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SavingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SavingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SavingWhereUniqueInput], {
    nullable: true
  })
  set?: SavingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SavingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingWhereUniqueInput], {
    nullable: true
  })
  delete?: SavingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingWhereUniqueInput], {
    nullable: true
  })
  connect?: SavingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SavingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SavingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SavingScalarWhereInput[] | undefined;
}
