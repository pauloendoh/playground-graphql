import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionScalarWhereInput } from "../inputs/ColorProportionScalarWhereInput";
import { ColorProportionUpdateManyMutationInput } from "../inputs/ColorProportionUpdateManyMutationInput";

@TypeGraphQL.InputType("ColorProportionUpdateManyWithWhereWithoutRawColorInput", {
  isAbstract: true
})
export class ColorProportionUpdateManyWithWhereWithoutRawColorInput {
  @TypeGraphQL.Field(_type => ColorProportionScalarWhereInput, {
    nullable: false
  })
  where!: ColorProportionScalarWhereInput;

  @TypeGraphQL.Field(_type => ColorProportionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ColorProportionUpdateManyMutationInput;
}
