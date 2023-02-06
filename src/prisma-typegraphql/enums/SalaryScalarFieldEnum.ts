import * as TypeGraphQL from "type-graphql";

export enum SalaryScalarFieldEnum {
  id = "id",
  userId = "userId",
  value = "value",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SalaryScalarFieldEnum, {
  name: "SalaryScalarFieldEnum",
  description: undefined,
});
