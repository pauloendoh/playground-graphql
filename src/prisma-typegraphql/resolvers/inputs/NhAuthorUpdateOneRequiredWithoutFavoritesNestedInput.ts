import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateOrConnectWithoutFavoritesInput } from "../inputs/NhAuthorCreateOrConnectWithoutFavoritesInput";
import { NhAuthorCreateWithoutFavoritesInput } from "../inputs/NhAuthorCreateWithoutFavoritesInput";
import { NhAuthorUpdateWithoutFavoritesInput } from "../inputs/NhAuthorUpdateWithoutFavoritesInput";
import { NhAuthorUpsertWithoutFavoritesInput } from "../inputs/NhAuthorUpsertWithoutFavoritesInput";
import { NhAuthorWhereUniqueInput } from "../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.InputType("NhAuthorUpdateOneRequiredWithoutFavoritesNestedInput", {
  isAbstract: true
})
export class NhAuthorUpdateOneRequiredWithoutFavoritesNestedInput {
  @TypeGraphQL.Field(_type => NhAuthorCreateWithoutFavoritesInput, {
    nullable: true
  })
  create?: NhAuthorCreateWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorCreateOrConnectWithoutFavoritesInput, {
    nullable: true
  })
  connectOrCreate?: NhAuthorCreateOrConnectWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorUpsertWithoutFavoritesInput, {
    nullable: true
  })
  upsert?: NhAuthorUpsertWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: true
  })
  connect?: NhAuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorUpdateWithoutFavoritesInput, {
    nullable: true
  })
  update?: NhAuthorUpdateWithoutFavoritesInput | undefined;
}
