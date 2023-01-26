import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWishlistItemsInput } from "../inputs/UserCreateWithoutWishlistItemsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutWishlistItemsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutWishlistItemsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWishlistItemsInput, {
    nullable: false
  })
  create!: UserCreateWithoutWishlistItemsInput;
}
