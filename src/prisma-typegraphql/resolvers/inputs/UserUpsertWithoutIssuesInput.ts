import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutIssuesInput } from "../inputs/UserCreateWithoutIssuesInput";
import { UserUpdateWithoutIssuesInput } from "../inputs/UserUpdateWithoutIssuesInput";

@TypeGraphQL.InputType("UserUpsertWithoutIssuesInput", {
  isAbstract: true
})
export class UserUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: UserCreateWithoutIssuesInput;
}
