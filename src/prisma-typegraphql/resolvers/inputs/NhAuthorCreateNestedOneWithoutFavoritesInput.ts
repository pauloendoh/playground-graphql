import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateOrConnectWithoutFavoritesInput } from "../inputs/NhAuthorCreateOrConnectWithoutFavoritesInput";
import { NhAuthorCreateWithoutFavoritesInput } from "../inputs/NhAuthorCreateWithoutFavoritesInput";
import { NhAuthorWhereUniqueInput } from "../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.InputType("NhAuthorCreateNestedOneWithoutFavoritesInput", {
  isAbstract: true
})
export class NhAuthorCreateNestedOneWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => NhAuthorCreateWithoutFavoritesInput, {
    nullable: true
  })
  create?: NhAuthorCreateWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorCreateOrConnectWithoutFavoritesInput, {
    nullable: true
  })
  connectOrCreate?: NhAuthorCreateOrConnectWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: true
  })
  connect?: NhAuthorWhereUniqueInput | undefined;
}
