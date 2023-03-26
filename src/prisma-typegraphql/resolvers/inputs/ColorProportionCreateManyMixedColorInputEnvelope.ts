import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateManyMixedColorInput } from "../inputs/ColorProportionCreateManyMixedColorInput";

@TypeGraphQL.InputType("ColorProportionCreateManyMixedColorInputEnvelope", {
  isAbstract: true
})
export class ColorProportionCreateManyMixedColorInputEnvelope {
  @TypeGraphQL.Field(_type => [ColorProportionCreateManyMixedColorInput], {
    nullable: false
  })
  data!: ColorProportionCreateManyMixedColorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
