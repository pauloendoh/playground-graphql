import * as TypeGraphQL from "type-graphql";

export enum IssueScalarFieldEnum {
  id = "id",
  userId = "userId",
  title = "title",
  solution = "solution",
  isSolved = "isSolved",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(IssueScalarFieldEnum, {
  name: "IssueScalarFieldEnum",
  description: undefined,
});
