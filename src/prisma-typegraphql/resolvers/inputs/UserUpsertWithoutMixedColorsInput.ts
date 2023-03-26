import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMixedColorsInput } from "../inputs/UserCreateWithoutMixedColorsInput";
import { UserUpdateWithoutMixedColorsInput } from "../inputs/UserUpdateWithoutMixedColorsInput";

@TypeGraphQL.InputType("UserUpsertWithoutMixedColorsInput", {
  isAbstract: true
})
export class UserUpsertWithoutMixedColorsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMixedColorsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMixedColorsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMixedColorsInput, {
    nullable: false
  })
  create!: UserCreateWithoutMixedColorsInput;
}
