import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { RawColorUpdateOneRequiredWithoutColorProportionsNestedInput } from "../inputs/RawColorUpdateOneRequiredWithoutColorProportionsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutColorProportionsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutColorProportionsNestedInput";

@TypeGraphQL.InputType("ColorProportionUpdateWithoutMixedColorInput", {
  isAbstract: true
})
export class ColorProportionUpdateWithoutMixedColorInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutColorProportionsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutColorProportionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => RawColorUpdateOneRequiredWithoutColorProportionsNestedInput, {
    nullable: true
  })
  rawColor?: RawColorUpdateOneRequiredWithoutColorProportionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  proportion?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
