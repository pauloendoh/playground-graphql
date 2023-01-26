import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExpenseUpdateManyWithoutCategoriesNestedInput } from "../inputs/ExpenseUpdateManyWithoutCategoriesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCategoriesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCategoriesNestedInput";

@TypeGraphQL.InputType("CategoryUpdateInput", {
  isAbstract: true
})
export class CategoryUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCategoriesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCategoriesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExpenseUpdateManyWithoutCategoriesNestedInput, {
    nullable: true
  })
  expenses?: ExpenseUpdateManyWithoutCategoriesNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bgColor?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
