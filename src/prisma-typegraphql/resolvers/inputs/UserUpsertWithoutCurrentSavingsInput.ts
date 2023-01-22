import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCurrentSavingsInput } from "../inputs/UserCreateWithoutCurrentSavingsInput";
import { UserUpdateWithoutCurrentSavingsInput } from "../inputs/UserUpdateWithoutCurrentSavingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutCurrentSavingsInput", {
  isAbstract: true
})
export class UserUpsertWithoutCurrentSavingsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCurrentSavingsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCurrentSavingsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCurrentSavingsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCurrentSavingsInput;
}
