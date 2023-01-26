import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateOrConnectWithoutCategoriesInput } from "../inputs/ExpenseCreateOrConnectWithoutCategoriesInput";
import { ExpenseCreateWithoutCategoriesInput } from "../inputs/ExpenseCreateWithoutCategoriesInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseCreateNestedManyWithoutCategoriesInput", {
  isAbstract: true
})
export class ExpenseCreateNestedManyWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => [ExpenseCreateWithoutCategoriesInput], {
    nullable: true
  })
  create?: ExpenseCreateWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseCreateOrConnectWithoutCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: ExpenseCreateOrConnectWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseWhereUniqueInput], {
    nullable: true
  })
  connect?: ExpenseWhereUniqueInput[] | undefined;
}
