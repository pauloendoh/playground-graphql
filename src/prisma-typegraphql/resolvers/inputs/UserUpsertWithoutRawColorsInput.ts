import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRawColorsInput } from "../inputs/UserCreateWithoutRawColorsInput";
import { UserUpdateWithoutRawColorsInput } from "../inputs/UserUpdateWithoutRawColorsInput";

@TypeGraphQL.InputType("UserUpsertWithoutRawColorsInput", {
  isAbstract: true
})
export class UserUpsertWithoutRawColorsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutRawColorsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRawColorsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRawColorsInput, {
    nullable: false
  })
  create!: UserCreateWithoutRawColorsInput;
}
