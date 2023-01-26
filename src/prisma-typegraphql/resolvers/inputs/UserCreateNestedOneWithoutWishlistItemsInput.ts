import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWishlistItemsInput } from "../inputs/UserCreateOrConnectWithoutWishlistItemsInput";
import { UserCreateWithoutWishlistItemsInput } from "../inputs/UserCreateWithoutWishlistItemsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutWishlistItemsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutWishlistItemsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWishlistItemsInput, {
    nullable: true
  })
  create?: UserCreateWithoutWishlistItemsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWishlistItemsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWishlistItemsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
