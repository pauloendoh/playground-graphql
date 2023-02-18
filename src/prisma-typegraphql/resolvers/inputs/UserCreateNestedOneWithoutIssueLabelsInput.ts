import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutIssueLabelsInput } from "../inputs/UserCreateOrConnectWithoutIssueLabelsInput";
import { UserCreateWithoutIssueLabelsInput } from "../inputs/UserCreateWithoutIssueLabelsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutIssueLabelsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutIssueLabelsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutIssueLabelsInput, {
    nullable: true
  })
  create?: UserCreateWithoutIssueLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutIssueLabelsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutIssueLabelsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
