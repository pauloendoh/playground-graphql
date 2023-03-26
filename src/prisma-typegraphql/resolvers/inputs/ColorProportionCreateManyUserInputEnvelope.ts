import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionCreateManyUserInput } from "../inputs/ColorProportionCreateManyUserInput";

@TypeGraphQL.InputType("ColorProportionCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ColorProportionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ColorProportionCreateManyUserInput], {
    nullable: false
  })
  data!: ColorProportionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
