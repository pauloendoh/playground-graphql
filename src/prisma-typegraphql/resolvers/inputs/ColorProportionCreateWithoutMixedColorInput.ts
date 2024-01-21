import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCreateNestedOneWithoutColorProportionsInput } from "../inputs/RawColorCreateNestedOneWithoutColorProportionsInput";
import { UserCreateNestedOneWithoutColorProportionsInput } from "../inputs/UserCreateNestedOneWithoutColorProportionsInput";

@TypeGraphQL.InputType("ColorProportionCreateWithoutMixedColorInput", {
  isAbstract: true
})
export class ColorProportionCreateWithoutMixedColorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutColorProportionsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutColorProportionsInput;

  @TypeGraphQL.Field(_type => RawColorCreateNestedOneWithoutColorProportionsInput, {
    nullable: false
  })
  rawColor!: RawColorCreateNestedOneWithoutColorProportionsInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  proportion!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
