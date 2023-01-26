import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateNestedManyWithoutCategoriesInput } from "../inputs/ExpenseCreateNestedManyWithoutCategoriesInput";

@TypeGraphQL.InputType("CategoryCreateWithoutUserInput", {
  isAbstract: true
})
export class CategoryCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ExpenseCreateNestedManyWithoutCategoriesInput, {
    nullable: true
  })
  expenses?: ExpenseCreateNestedManyWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bgColor!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
