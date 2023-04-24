import * as TypeGraphQL from "type-graphql";

export enum NhAuthorScalarFieldEnum {
  url = "url",
  userId = "userId",
  checkedAt = "checkedAt",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(NhAuthorScalarFieldEnum, {
  name: "NhAuthorScalarFieldEnum",
  description: undefined,
});
