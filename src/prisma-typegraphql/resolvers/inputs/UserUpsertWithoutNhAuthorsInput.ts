import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutNhAuthorsInput } from "../inputs/UserCreateWithoutNhAuthorsInput";
import { UserUpdateWithoutNhAuthorsInput } from "../inputs/UserUpdateWithoutNhAuthorsInput";

@TypeGraphQL.InputType("UserUpsertWithoutNhAuthorsInput", {
  isAbstract: true
})
export class UserUpsertWithoutNhAuthorsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutNhAuthorsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutNhAuthorsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutNhAuthorsInput, {
    nullable: false
  })
  create!: UserCreateWithoutNhAuthorsInput;
}
