import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutIssuesInput } from "../inputs/UserCreateWithoutIssuesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutIssuesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: UserCreateWithoutIssuesInput;
}
