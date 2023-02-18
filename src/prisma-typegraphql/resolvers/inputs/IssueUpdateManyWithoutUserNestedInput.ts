import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyUserInputEnvelope } from "../inputs/IssueCreateManyUserInputEnvelope";
import { IssueCreateOrConnectWithoutUserInput } from "../inputs/IssueCreateOrConnectWithoutUserInput";
import { IssueCreateWithoutUserInput } from "../inputs/IssueCreateWithoutUserInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutUserInput } from "../inputs/IssueUpdateManyWithWhereWithoutUserInput";
import { IssueUpdateWithWhereUniqueWithoutUserInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutUserInput";
import { IssueUpsertWithWhereUniqueWithoutUserInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutUserInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class IssueUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutUserInput], {
    nullable: true
  })
  create?: IssueCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: IssueUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  set?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  delete?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: IssueUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: IssueUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueScalarWhereInput[] | undefined;
}
