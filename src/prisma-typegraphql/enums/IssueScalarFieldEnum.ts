import * as TypeGraphQL from "type-graphql";

export enum IssueScalarFieldEnum {
  id = "id",
  userId = "userId",
  position = "position",
  solvedPosition = "solvedPosition",
  title = "title",
  solution = "solution",
  isSolved = "isSolved",
  frequency = "frequency",
  intensity = "intensity",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(IssueScalarFieldEnum, {
  name: "IssueScalarFieldEnum",
  description: undefined,
});
