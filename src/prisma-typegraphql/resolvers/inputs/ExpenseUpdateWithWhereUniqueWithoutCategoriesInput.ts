import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseUpdateWithoutCategoriesInput } from "../inputs/ExpenseUpdateWithoutCategoriesInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpdateWithWhereUniqueWithoutCategoriesInput", {
  isAbstract: true
})
export class ExpenseUpdateWithWhereUniqueWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpenseUpdateWithoutCategoriesInput, {
    nullable: false
  })
  data!: ExpenseUpdateWithoutCategoriesInput;
}
