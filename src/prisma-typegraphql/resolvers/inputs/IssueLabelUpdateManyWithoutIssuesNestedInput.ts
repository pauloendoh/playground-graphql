import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateOrConnectWithoutIssuesInput } from "../inputs/IssueLabelCreateOrConnectWithoutIssuesInput";
import { IssueLabelCreateWithoutIssuesInput } from "../inputs/IssueLabelCreateWithoutIssuesInput";
import { IssueLabelScalarWhereInput } from "../inputs/IssueLabelScalarWhereInput";
import { IssueLabelUpdateManyWithWhereWithoutIssuesInput } from "../inputs/IssueLabelUpdateManyWithWhereWithoutIssuesInput";
import { IssueLabelUpdateWithWhereUniqueWithoutIssuesInput } from "../inputs/IssueLabelUpdateWithWhereUniqueWithoutIssuesInput";
import { IssueLabelUpsertWithWhereUniqueWithoutIssuesInput } from "../inputs/IssueLabelUpsertWithWhereUniqueWithoutIssuesInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelUpdateManyWithoutIssuesNestedInput", {
  isAbstract: true
})
export class IssueLabelUpdateManyWithoutIssuesNestedInput {
  @TypeGraphQL.Field(_type => [IssueLabelCreateWithoutIssuesInput], {
    nullable: true
  })
  create?: IssueLabelCreateWithoutIssuesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutIssuesInput], {
    nullable: true
  })
  connectOrCreate?: IssueLabelCreateOrConnectWithoutIssuesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpsertWithWhereUniqueWithoutIssuesInput], {
    nullable: true
  })
  upsert?: IssueLabelUpsertWithWhereUniqueWithoutIssuesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [IssueLabelUpdateWithWhereUniqueWithoutIssuesInput], {
    nullable: true
  })
  update?: IssueLabelUpdateWithWhereUniqueWithoutIssuesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelUpdateManyWithWhereWithoutIssuesInput], {
    nullable: true
  })
  updateMany?: IssueLabelUpdateManyWithWhereWithoutIssuesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueLabelScalarWhereInput[] | undefined;
}
