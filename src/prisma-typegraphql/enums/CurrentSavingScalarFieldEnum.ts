import * as TypeGraphQL from "type-graphql";

export enum CurrentSavingScalarFieldEnum {
  id = "id",
  userId = "userId",
  value = "value",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CurrentSavingScalarFieldEnum, {
  name: "CurrentSavingScalarFieldEnum",
  description: undefined,
});
