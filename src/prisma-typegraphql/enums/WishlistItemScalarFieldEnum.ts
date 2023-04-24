import * as TypeGraphQL from "type-graphql";

export enum WishlistItemScalarFieldEnum {
  id = "id",
  userId = "userId",
  itemName = "itemName",
  priceInThousands = "priceInThousands",
  price = "price",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(WishlistItemScalarFieldEnum, {
  name: "WishlistItemScalarFieldEnum",
  description: undefined,
});
