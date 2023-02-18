import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutIssuesInput } from "../inputs/UserCreateOrConnectWithoutIssuesInput";
import { UserCreateWithoutIssuesInput } from "../inputs/UserCreateWithoutIssuesInput";
import { UserUpdateWithoutIssuesInput } from "../inputs/UserUpdateWithoutIssuesInput";
import { UserUpsertWithoutIssuesInput } from "../inputs/UserUpsertWithoutIssuesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutIssuesNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutIssuesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: UserCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutIssuesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutIssuesInput | undefined;
}
