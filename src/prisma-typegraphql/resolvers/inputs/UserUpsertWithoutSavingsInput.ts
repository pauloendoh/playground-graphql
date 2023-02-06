import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSavingsInput } from "../inputs/UserCreateWithoutSavingsInput";
import { UserUpdateWithoutSavingsInput } from "../inputs/UserUpdateWithoutSavingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutSavingsInput", {
  isAbstract: true
})
export class UserUpsertWithoutSavingsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSavingsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSavingsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSavingsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSavingsInput;
}
