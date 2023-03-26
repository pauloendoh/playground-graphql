import * as TypeGraphQL from "type-graphql";

export enum RawColorScalarFieldEnum {
  id = "id",
  userId = "userId",
  name = "name",
  color = "color",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(RawColorScalarFieldEnum, {
  name: "RawColorScalarFieldEnum",
  description: undefined,
});
