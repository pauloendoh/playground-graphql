import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSavingsInput } from "../inputs/UserCreateOrConnectWithoutSavingsInput";
import { UserCreateWithoutSavingsInput } from "../inputs/UserCreateWithoutSavingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSavingsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSavingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSavingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSavingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSavingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSavingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
