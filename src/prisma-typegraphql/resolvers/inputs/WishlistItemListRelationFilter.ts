import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemWhereInput } from "../inputs/WishlistItemWhereInput";

@TypeGraphQL.InputType("WishlistItemListRelationFilter", {
  isAbstract: true
})
export class WishlistItemListRelationFilter {
  @TypeGraphQL.Field(_type => WishlistItemWhereInput, {
    nullable: true
  })
  every?: WishlistItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemWhereInput, {
    nullable: true
  })
  some?: WishlistItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemWhereInput, {
    nullable: true
  })
  none?: WishlistItemWhereInput | undefined;
}
