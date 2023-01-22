import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRecipeInput } from "../inputs/UserCreateWithoutRecipeInput";
import { UserUpdateWithoutRecipeInput } from "../inputs/UserUpdateWithoutRecipeInput";

@TypeGraphQL.InputType("UserUpsertWithoutRecipeInput", {
  isAbstract: true
})
export class UserUpsertWithoutRecipeInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutRecipeInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRecipeInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRecipeInput, {
    nullable: false
  })
  create!: UserCreateWithoutRecipeInput;
}
