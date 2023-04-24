import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutNhFavoritesInput } from "../inputs/UserCreateWithoutNhFavoritesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutNhFavoritesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutNhFavoritesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutNhFavoritesInput, {
    nullable: false
  })
  create!: UserCreateWithoutNhFavoritesInput;
}
