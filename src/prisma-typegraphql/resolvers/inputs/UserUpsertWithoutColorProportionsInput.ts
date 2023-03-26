import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutColorProportionsInput } from "../inputs/UserCreateWithoutColorProportionsInput";
import { UserUpdateWithoutColorProportionsInput } from "../inputs/UserUpdateWithoutColorProportionsInput";

@TypeGraphQL.InputType("UserUpsertWithoutColorProportionsInput", {
  isAbstract: true
})
export class UserUpsertWithoutColorProportionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutColorProportionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutColorProportionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutColorProportionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutColorProportionsInput;
}
