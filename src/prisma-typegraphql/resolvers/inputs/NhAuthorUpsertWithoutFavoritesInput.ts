import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateWithoutFavoritesInput } from "../inputs/NhAuthorCreateWithoutFavoritesInput";
import { NhAuthorUpdateWithoutFavoritesInput } from "../inputs/NhAuthorUpdateWithoutFavoritesInput";

@TypeGraphQL.InputType("NhAuthorUpsertWithoutFavoritesInput", {
  isAbstract: true
})
export class NhAuthorUpsertWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => NhAuthorUpdateWithoutFavoritesInput, {
    nullable: false
  })
  update!: NhAuthorUpdateWithoutFavoritesInput;

  @TypeGraphQL.Field(_type => NhAuthorCreateWithoutFavoritesInput, {
    nullable: false
  })
  create!: NhAuthorCreateWithoutFavoritesInput;
}
