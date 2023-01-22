import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCurrentSavingsInput } from "../inputs/UserCreateOrConnectWithoutCurrentSavingsInput";
import { UserCreateWithoutCurrentSavingsInput } from "../inputs/UserCreateWithoutCurrentSavingsInput";
import { UserUpdateWithoutCurrentSavingsInput } from "../inputs/UserUpdateWithoutCurrentSavingsInput";
import { UserUpsertWithoutCurrentSavingsInput } from "../inputs/UserUpsertWithoutCurrentSavingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCurrentSavingsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCurrentSavingsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCurrentSavingsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCurrentSavingsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCurrentSavingsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCurrentSavingsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCurrentSavingsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCurrentSavingsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCurrentSavingsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCurrentSavingsInput | undefined;
}
