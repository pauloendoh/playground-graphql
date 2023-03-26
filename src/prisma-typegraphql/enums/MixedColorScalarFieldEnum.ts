import * as TypeGraphQL from "type-graphql";

export enum MixedColorScalarFieldEnum {
  id = "id",
  userId = "userId",
  name = "name",
  color = "color",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(MixedColorScalarFieldEnum, {
  name: "MixedColorScalarFieldEnum",
  description: undefined,
});
