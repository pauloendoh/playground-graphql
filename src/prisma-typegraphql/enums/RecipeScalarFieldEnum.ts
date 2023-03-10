import * as TypeGraphQL from "type-graphql";

export enum RecipeScalarFieldEnum {
  id = "id",
  userId = "userId",
  title = "title",
  description = "description",
  rating = "rating",
  savedPosition = "savedPosition",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(RecipeScalarFieldEnum, {
  name: "RecipeScalarFieldEnum",
  description: undefined,
});
