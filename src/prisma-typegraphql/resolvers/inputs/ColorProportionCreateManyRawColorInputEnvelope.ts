import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateManyRawColorInput } from "../inputs/ColorProportionCreateManyRawColorInput";

@TypeGraphQL.InputType("ColorProportionCreateManyRawColorInputEnvelope", {
  isAbstract: true
})
export class ColorProportionCreateManyRawColorInputEnvelope {
  @TypeGraphQL.Field(_type => [ColorProportionCreateManyRawColorInput], {
    nullable: false
  })
  data!: ColorProportionCreateManyRawColorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
