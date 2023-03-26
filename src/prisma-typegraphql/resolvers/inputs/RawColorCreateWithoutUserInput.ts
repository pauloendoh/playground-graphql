import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateNestedManyWithoutRawColorInput } from "../inputs/ColorProportionCreateNestedManyWithoutRawColorInput";

@TypeGraphQL.InputType("RawColorCreateWithoutUserInput", {
  isAbstract: true
})
export class RawColorCreateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ColorProportionCreateNestedManyWithoutRawColorInput, {
    nullable: true
  })
  colorProportions?: ColorProportionCreateNestedManyWithoutRawColorInput | undefined;
}
