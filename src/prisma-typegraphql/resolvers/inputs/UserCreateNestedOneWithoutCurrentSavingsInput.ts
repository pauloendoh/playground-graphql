import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCurrentSavingsInput } from "../inputs/UserCreateOrConnectWithoutCurrentSavingsInput";
import { UserCreateWithoutCurrentSavingsInput } from "../inputs/UserCreateWithoutCurrentSavingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCurrentSavingsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCurrentSavingsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCurrentSavingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCurrentSavingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCurrentSavingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCurrentSavingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
