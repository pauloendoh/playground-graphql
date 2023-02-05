import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateManyWithoutUserNestedInput } from "../inputs/CategoryUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { RecipeUpdateManyWithoutUserNestedInput } from "../inputs/RecipeUpdateManyWithoutUserNestedInput";
import { SavingUpdateManyWithoutUserNestedInput } from "../inputs/SavingUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WishlistItemUpdateManyWithoutUserNestedInput } from "../inputs/WishlistItemUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutExpensesInput", {
  isAbstract: true
})
export class UserUpdateWithoutExpensesInput {
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
  currentSavings?: SavingUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  wishlistItems?: WishlistItemUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  categories?: CategoryUpdateManyWithoutUserNestedInput | undefined;
}
