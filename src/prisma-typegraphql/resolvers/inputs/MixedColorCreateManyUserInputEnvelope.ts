import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCreateManyUserInput } from "../inputs/MixedColorCreateManyUserInput";

@TypeGraphQL.InputType("MixedColorCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class MixedColorCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MixedColorCreateManyUserInput], {
    nullable: false
  })
  data!: MixedColorCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
