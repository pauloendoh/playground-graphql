import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWishlistItemsInput } from "../inputs/UserCreateWithoutWishlistItemsInput";
import { UserUpdateWithoutWishlistItemsInput } from "../inputs/UserUpdateWithoutWishlistItemsInput";

@TypeGraphQL.InputType("UserUpsertWithoutWishlistItemsInput", {
  isAbstract: true
})
export class UserUpsertWithoutWishlistItemsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutWishlistItemsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutWishlistItemsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWishlistItemsInput, {
    nullable: false
  })
  create!: UserCreateWithoutWishlistItemsInput;
}
