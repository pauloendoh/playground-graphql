import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateOrConnectWithoutLabelsInput } from "../inputs/IssueCreateOrConnectWithoutLabelsInput";
import { IssueCreateWithoutLabelsInput } from "../inputs/IssueCreateWithoutLabelsInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutLabelsInput } from "../inputs/IssueUpdateManyWithWhereWithoutLabelsInput";
import { IssueUpdateWithWhereUniqueWithoutLabelsInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutLabelsInput";
import { IssueUpsertWithWhereUniqueWithoutLabelsInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutLabelsInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateManyWithoutLabelsNestedInput", {
  isAbstract: true
})
export class IssueUpdateManyWithoutLabelsNestedInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutLabelsInput], {
    nullable: true
  })
  create?: IssueCreateWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutLabelsInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutLabelsInput], {
    nullable: true
  })
  upsert?: IssueUpsertWithWhereUniqueWithoutLabelsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutLabelsInput], {
    nullable: true
  })
  update?: IssueUpdateWithWhereUniqueWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutLabelsInput], {
    nullable: true
  })
  updateMany?: IssueUpdateManyWithWhereWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueScalarWhereInput[] | undefined;
}
