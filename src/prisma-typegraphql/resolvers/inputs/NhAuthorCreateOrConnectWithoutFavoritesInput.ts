import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateWithoutFavoritesInput } from "../inputs/NhAuthorCreateWithoutFavoritesInput";
import { NhAuthorWhereUniqueInput } from "../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.InputType("NhAuthorCreateOrConnectWithoutFavoritesInput", {
  isAbstract: true
})
export class NhAuthorCreateOrConnectWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: NhAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhAuthorCreateWithoutFavoritesInput, {
    nullable: false
  })
  create!: NhAuthorCreateWithoutFavoritesInput;
}
