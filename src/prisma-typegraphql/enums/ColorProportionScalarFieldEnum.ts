import * as TypeGraphQL from "type-graphql";

export enum ColorProportionScalarFieldEnum {
  id = "id",
  userId = "userId",
  mixedColorId = "mixedColorId",
  rawColorId = "rawColorId",
  proportion = "proportion",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ColorProportionScalarFieldEnum, {
  name: "ColorProportionScalarFieldEnum",
  description: undefined,
});
