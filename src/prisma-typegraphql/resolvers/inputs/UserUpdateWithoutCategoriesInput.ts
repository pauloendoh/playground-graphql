import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionUpdateManyWithoutUserNestedInput } from "../inputs/ColorProportionUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExpenseUpdateManyWithoutUserNestedInput } from "../inputs/ExpenseUpdateManyWithoutUserNestedInput";
import { IssueLabelUpdateManyWithoutUserNestedInput } from "../inputs/IssueLabelUpdateManyWithoutUserNestedInput";
import { IssueUpdateManyWithoutUserNestedInput } from "../inputs/IssueUpdateManyWithoutUserNestedInput";
import { MixedColorUpdateManyWithoutUserNestedInput } from "../inputs/MixedColorUpdateManyWithoutUserNestedInput";
import { RawColorUpdateManyWithoutUserNestedInput } from "../inputs/RawColorUpdateManyWithoutUserNestedInput";
import { RecipeUpdateManyWithoutUserNestedInput } from "../inputs/RecipeUpdateManyWithoutUserNestedInput";
import { SalaryUpdateOneWithoutUserNestedInput } from "../inputs/SalaryUpdateOneWithoutUserNestedInput";
import { SavingUpdateManyWithoutUserNestedInput } from "../inputs/SavingUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WishlistItemUpdateManyWithoutUserNestedInput } from "../inputs/WishlistItemUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutCategoriesInput", {
  isAbstract: true
})
export class UserUpdateWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RecipeUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  recipe?: RecipeUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => SavingUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  savings?: SavingUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  wishlistItems?: WishlistItemUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExpenseUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  expenses?: ExpenseUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => SalaryUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  salary?: SalaryUpdateOneWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => IssueUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  issues?: IssueUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => IssueLabelUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  issueLabels?: IssueLabelUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => RawColorUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  rawColors?: RawColorUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  mixedColors?: MixedColorUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => ColorProportionUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  colorProportions?: ColorProportionUpdateManyWithoutUserNestedInput | undefined;
}
