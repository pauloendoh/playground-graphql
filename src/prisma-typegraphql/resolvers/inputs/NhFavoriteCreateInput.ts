import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateNestedOneWithoutFavoritesInput } from "../inputs/NhAuthorCreateNestedOneWithoutFavoritesInput";
import { UserCreateNestedOneWithoutNhFavoritesInput } from "../inputs/UserCreateNestedOneWithoutNhFavoritesInput";

@TypeGraphQL.InputType("NhFavoriteCreateInput", {
  isAbstract: true
})
export class NhFavoriteCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => NhAuthorCreateNestedOneWithoutFavoritesInput, {
    nullable: false
  })
  author!: NhAuthorCreateNestedOneWithoutFavoritesInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNhFavoritesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutNhFavoritesInput;
}
