import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateNestedOneWithoutFavoritesInput } from "../inputs/NhAuthorCreateNestedOneWithoutFavoritesInput";

@TypeGraphQL.InputType("NhFavoriteCreateWithoutUserInput", {
  isAbstract: true
})
export class NhFavoriteCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => NhAuthorCreateNestedOneWithoutFavoritesInput, {
    nullable: false
  })
  author!: NhAuthorCreateNestedOneWithoutFavoritesInput;
}
