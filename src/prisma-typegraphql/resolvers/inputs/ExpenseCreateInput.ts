import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedManyWithoutExpensesInput } from "../inputs/CategoryCreateNestedManyWithoutExpensesInput";
import { UserCreateNestedOneWithoutExpensesInput } from "../inputs/UserCreateNestedOneWithoutExpensesInput";

@TypeGraphQL.InputType("ExpenseCreateInput", {
  isAbstract: true
})
export class ExpenseCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutExpensesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutExpensesInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  value!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rating?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  timesPerMonth?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutExpensesInput, {
    nullable: true
  })
  categories?: CategoryCreateNestedManyWithoutExpensesInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
