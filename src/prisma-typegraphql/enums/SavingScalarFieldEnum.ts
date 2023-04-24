import * as TypeGraphQL from "type-graphql";

export enum SavingScalarFieldEnum {
  id = "id",
  userId = "userId",
  value = "value",
  date = "date",
  selectedAsAverageMonthlyGrowth = "selectedAsAverageMonthlyGrowth",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SavingScalarFieldEnum, {
  name: "SavingScalarFieldEnum",
  description: undefined,
});
