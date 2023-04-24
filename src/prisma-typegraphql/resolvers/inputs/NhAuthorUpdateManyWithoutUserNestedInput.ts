import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateManyUserInputEnvelope } from "../inputs/NhAuthorCreateManyUserInputEnvelope";
import { NhAuthorCreateOrConnectWithoutUserInput } from "../inputs/NhAuthorCreateOrConnectWithoutUserInput";
import { NhAuthorCreateWithoutUserInput } from "../inputs/NhAuthorCreateWithoutUserInput";
import { NhAuthorScalarWhereInput } from "../inputs/NhAuthorScalarWhereInput";
import { NhAuthorUpdateManyWithWhereWithoutUserInput } from "../inputs/NhAuthorUpdateManyWithWhereWithoutUserInput";
import { NhAuthorUpdateWithWhereUniqueWithoutUserInput } from "../inputs/NhAuthorUpdateWithWhereUniqueWithoutUserInput";
import { NhAuthorUpsertWithWhereUniqueWithoutUserInput } from "../inputs/NhAuthorUpsertWithWhereUniqueWithoutUserInput";
import { NhAuthorWhereUniqueInput } from "../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.InputType("NhAuthorUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class NhAuthorUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [NhAuthorCreateWithoutUserInput], {
    nullable: true
  })
  create?: NhAuthorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: NhAuthorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: NhAuthorUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => NhAuthorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: NhAuthorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorWhereUniqueInput], {
    nullable: true
  })
  set?: NhAuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NhAuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorWhereUniqueInput], {
    nullable: true
  })
  delete?: NhAuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorWhereUniqueInput], {
    nullable: true
  })
  connect?: NhAuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: NhAuthorUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: NhAuthorUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NhAuthorScalarWhereInput[] | undefined;
}
