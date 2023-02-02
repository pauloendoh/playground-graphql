import * as TypeGraphQL from "type-graphql";

export enum ExpenseScalarFieldEnum {
  id = "id",
  userId = "userId",
  name = "name",
  value = "value",
  rating = "rating",
  date = "date",
  description = "description",
  timesPerMonth = "timesPerMonth",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ExpenseScalarFieldEnum, {
  name: "ExpenseScalarFieldEnum",
  description: undefined,
});
