import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutIssueLabelsInput } from "../inputs/UserCreateWithoutIssueLabelsInput";
import { UserUpdateWithoutIssueLabelsInput } from "../inputs/UserUpdateWithoutIssueLabelsInput";

@TypeGraphQL.InputType("UserUpsertWithoutIssueLabelsInput", {
  isAbstract: true
})
export class UserUpsertWithoutIssueLabelsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutIssueLabelsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutIssueLabelsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutIssueLabelsInput, {
    nullable: false
  })
  create!: UserCreateWithoutIssueLabelsInput;
}
