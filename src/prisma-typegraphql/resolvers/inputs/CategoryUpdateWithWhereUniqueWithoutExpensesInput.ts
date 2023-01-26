import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutExpensesInput } from "../inputs/CategoryUpdateWithoutExpensesInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateWithWhereUniqueWithoutExpensesInput", {
  isAbstract: true
})
export class CategoryUpdateWithWhereUniqueWithoutExpensesInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutExpensesInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutExpensesInput;
}
