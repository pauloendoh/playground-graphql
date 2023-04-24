import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNhFavoritesInput } from "../inputs/UserCreateOrConnectWithoutNhFavoritesInput";
import { UserCreateWithoutNhFavoritesInput } from "../inputs/UserCreateWithoutNhFavoritesInput";
import { UserUpdateWithoutNhFavoritesInput } from "../inputs/UserUpdateWithoutNhFavoritesInput";
import { UserUpsertWithoutNhFavoritesInput } from "../inputs/UserUpsertWithoutNhFavoritesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutNhFavoritesNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutNhFavoritesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNhFavoritesInput, {
    nullable: true
  })
  create?: UserCreateWithoutNhFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNhFavoritesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNhFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutNhFavoritesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutNhFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutNhFavoritesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutNhFavoritesInput | undefined;
}
