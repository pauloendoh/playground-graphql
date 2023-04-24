import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutNhFavoritesInput } from "../inputs/UserCreateWithoutNhFavoritesInput";
import { UserUpdateWithoutNhFavoritesInput } from "../inputs/UserUpdateWithoutNhFavoritesInput";

@TypeGraphQL.InputType("UserUpsertWithoutNhFavoritesInput", {
  isAbstract: true
})
export class UserUpsertWithoutNhFavoritesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutNhFavoritesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutNhFavoritesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutNhFavoritesInput, {
    nullable: false
  })
  create!: UserCreateWithoutNhFavoritesInput;
}
