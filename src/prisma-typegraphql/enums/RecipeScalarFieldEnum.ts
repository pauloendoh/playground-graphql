import * as TypeGraphQL from "type-graphql";

export enum RecipeScalarFieldEnum {
  id = "id",
  userId = "userId",
  title = "title",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(RecipeScalarFieldEnum, {
  name: "RecipeScalarFieldEnum",
  description: undefined,
});
