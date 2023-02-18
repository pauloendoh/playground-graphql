import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutIssuesInput } from "../inputs/UserCreateOrConnectWithoutIssuesInput";
import { UserCreateWithoutIssuesInput } from "../inputs/UserCreateWithoutIssuesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutIssuesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: UserCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
