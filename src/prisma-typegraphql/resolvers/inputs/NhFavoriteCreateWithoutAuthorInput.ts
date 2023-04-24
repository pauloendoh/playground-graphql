import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutNhFavoritesInput } from "../inputs/UserCreateNestedOneWithoutNhFavoritesInput";

@TypeGraphQL.InputType("NhFavoriteCreateWithoutAuthorInput", {
  isAbstract: true
})
export class NhFavoriteCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNhFavoritesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutNhFavoritesInput;
}
