import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutExpensesInput } from "../inputs/UserCreateWithoutExpensesInput";
import { UserUpdateWithoutExpensesInput } from "../inputs/UserUpdateWithoutExpensesInput";

@TypeGraphQL.InputType("UserUpsertWithoutExpensesInput", {
  isAbstract: true
})
export class UserUpsertWithoutExpensesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutExpensesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutExpensesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutExpensesInput, {
    nullable: false
  })
  create!: UserCreateWithoutExpensesInput;
}
