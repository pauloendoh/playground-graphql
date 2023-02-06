import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSalaryInput } from "../inputs/UserCreateWithoutSalaryInput";
import { UserUpdateWithoutSalaryInput } from "../inputs/UserUpdateWithoutSalaryInput";

@TypeGraphQL.InputType("UserUpsertWithoutSalaryInput", {
  isAbstract: true
})
export class UserUpsertWithoutSalaryInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSalaryInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSalaryInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSalaryInput, {
    nullable: false
  })
  create!: UserCreateWithoutSalaryInput;
}
