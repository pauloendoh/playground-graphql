import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNhFavoritesInput } from "../inputs/UserCreateOrConnectWithoutNhFavoritesInput";
import { UserCreateWithoutNhFavoritesInput } from "../inputs/UserCreateWithoutNhFavoritesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutNhFavoritesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutNhFavoritesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNhFavoritesInput, {
    nullable: true
  })
  create?: UserCreateWithoutNhFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNhFavoritesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNhFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
