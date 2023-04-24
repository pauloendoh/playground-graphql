import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorUpdateOneRequiredWithoutFavoritesNestedInput } from "../inputs/NhAuthorUpdateOneRequiredWithoutFavoritesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutNhFavoritesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutNhFavoritesNestedInput";

@TypeGraphQL.InputType("NhFavoriteUpdateInput", {
  isAbstract: true
})
export class NhFavoriteUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorUpdateOneRequiredWithoutFavoritesNestedInput, {
    nullable: true
  })
  author?: NhAuthorUpdateOneRequiredWithoutFavoritesNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutNhFavoritesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutNhFavoritesNestedInput | undefined;
}
