import * as TypeGraphQL from "type-graphql";

export enum IssueLabelScalarFieldEnum {
  id = "id",
  userId = "userId",
  name = "name",
  bgColor = "bgColor",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(IssueLabelScalarFieldEnum, {
  name: "IssueLabelScalarFieldEnum",
  description: undefined,
});
