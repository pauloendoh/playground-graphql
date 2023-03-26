import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCreateNestedOneWithoutColorProportionsInput } from "../inputs/MixedColorCreateNestedOneWithoutColorProportionsInput";
import { RawColorCreateNestedOneWithoutColorProportionsInput } from "../inputs/RawColorCreateNestedOneWithoutColorProportionsInput";
import { UserCreateNestedOneWithoutColorProportionsInput } from "../inputs/UserCreateNestedOneWithoutColorProportionsInput";

@TypeGraphQL.InputType("ColorProportionCreateInput", {
  isAbstract: true
})
export class ColorProportionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutColorProportionsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutColorProportionsInput;

  @TypeGraphQL.Field(_type => MixedColorCreateNestedOneWithoutColorProportionsInput, {
    nullable: false
  })
  mixedColor!: MixedColorCreateNestedOneWithoutColorProportionsInput;

  @TypeGraphQL.Field(_type => RawColorCreateNestedOneWithoutColorProportionsInput, {
    nullable: false
  })
  rawColor!: RawColorCreateNestedOneWithoutColorProportionsInput;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  proportion!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
