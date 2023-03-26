import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateNestedManyWithoutMixedColorInput } from "../inputs/ColorProportionCreateNestedManyWithoutMixedColorInput";

@TypeGraphQL.InputType("MixedColorCreateWithoutUserInput", {
  isAbstract: true
})
export class MixedColorCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  color!: string;

  @TypeGraphQL.Field(_type => ColorProportionCreateNestedManyWithoutMixedColorInput, {
    nullable: true
  })
  colorProportions?: ColorProportionCreateNestedManyWithoutMixedColorInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
