import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput } from "../inputs/MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutColorProportionsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutColorProportionsNestedInput";

@TypeGraphQL.InputType("ColorProportionUpdateWithoutRawColorInput", {
  isAbstract: true
})
export class ColorProportionUpdateWithoutRawColorInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutColorProportionsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutColorProportionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput, {
    nullable: true
  })
  mixedColor?: MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  proportion?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
