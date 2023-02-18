import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateManyUserInputEnvelope } from "../inputs/IssueLabelCreateManyUserInputEnvelope";
import { IssueLabelCreateOrConnectWithoutUserInput } from "../inputs/IssueLabelCreateOrConnectWithoutUserInput";
import { IssueLabelCreateWithoutUserInput } from "../inputs/IssueLabelCreateWithoutUserInput";
import { IssueLabelScalarWhereInput } from "../inputs/IssueLabelScalarWhereInput";
import { IssueLabelUpdateManyWithWhereWithoutUserInput } from "../inputs/IssueLabelUpdateManyWithWhereWithoutUserInput";
import { IssueLabelUpdateWithWhereUniqueWithoutUserInput } from "../inputs/IssueLabelUpdateWithWhereUniqueWithoutUserInput";
import { IssueLabelUpsertWithWhereUniqueWithoutUserInput } from "../inputs/IssueLabelUpsertWithWhereUniqueWithoutUserInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class IssueLabelUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [IssueLabelCreateWithoutUserInput], {
    nullable: true
  })
  create?: IssueLabelCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: IssueLabelCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: IssueLabelUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueLabelCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: IssueLabelCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  set?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  delete?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueLabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: IssueLabelUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: IssueLabelUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueLabelScalarWhereInput[] | undefined;
}
