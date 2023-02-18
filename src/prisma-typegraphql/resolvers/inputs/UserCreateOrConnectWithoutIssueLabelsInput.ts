import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutIssueLabelsInput } from "../inputs/UserCreateWithoutIssueLabelsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutIssueLabelsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutIssueLabelsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutIssueLabelsInput, {
    nullable: false
  })
  create!: UserCreateWithoutIssueLabelsInput;
}
