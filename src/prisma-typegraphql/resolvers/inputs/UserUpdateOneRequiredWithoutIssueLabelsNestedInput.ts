import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutIssueLabelsInput } from "../inputs/UserCreateOrConnectWithoutIssueLabelsInput";
import { UserCreateWithoutIssueLabelsInput } from "../inputs/UserCreateWithoutIssueLabelsInput";
import { UserUpdateWithoutIssueLabelsInput } from "../inputs/UserUpdateWithoutIssueLabelsInput";
import { UserUpsertWithoutIssueLabelsInput } from "../inputs/UserUpsertWithoutIssueLabelsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutIssueLabelsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutIssueLabelsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutIssueLabelsInput, {
    nullable: true
  })
  create?: UserCreateWithoutIssueLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutIssueLabelsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutIssueLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutIssueLabelsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutIssueLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutIssueLabelsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutIssueLabelsInput | undefined;
}
