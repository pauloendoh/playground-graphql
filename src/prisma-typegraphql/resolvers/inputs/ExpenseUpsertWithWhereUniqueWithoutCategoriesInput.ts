import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateWithoutCategoriesInput } from "../inputs/ExpenseCreateWithoutCategoriesInput";
import { ExpenseUpdateWithoutCategoriesInput } from "../inputs/ExpenseUpdateWithoutCategoriesInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpsertWithWhereUniqueWithoutCategoriesInput", {
  isAbstract: true
})
export class ExpenseUpsertWithWhereUniqueWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpenseUpdateWithoutCategoriesInput, {
    nullable: false
  })
  update!: ExpenseUpdateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => ExpenseCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: ExpenseCreateWithoutCategoriesInput;
}
