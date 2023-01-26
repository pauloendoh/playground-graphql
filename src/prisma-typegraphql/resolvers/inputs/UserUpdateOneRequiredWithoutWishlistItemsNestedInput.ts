import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWishlistItemsInput } from "../inputs/UserCreateOrConnectWithoutWishlistItemsInput";
import { UserCreateWithoutWishlistItemsInput } from "../inputs/UserCreateWithoutWishlistItemsInput";
import { UserUpdateWithoutWishlistItemsInput } from "../inputs/UserUpdateWithoutWishlistItemsInput";
import { UserUpsertWithoutWishlistItemsInput } from "../inputs/UserUpsertWithoutWishlistItemsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutWishlistItemsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutWishlistItemsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWishlistItemsInput, {
    nullable: true
  })
  create?: UserCreateWithoutWishlistItemsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWishlistItemsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWishlistItemsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutWishlistItemsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutWishlistItemsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutWishlistItemsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutWishlistItemsInput | undefined;
}
