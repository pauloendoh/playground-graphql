import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateWithoutCategoriesInput } from "../inputs/ExpenseCreateWithoutCategoriesInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseCreateOrConnectWithoutCategoriesInput", {
  isAbstract: true
})
export class ExpenseCreateOrConnectWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpenseCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: ExpenseCreateWithoutCategoriesInput;
}
