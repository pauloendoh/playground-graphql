import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCreateManyUserInput } from "../inputs/RawColorCreateManyUserInput";

@TypeGraphQL.InputType("RawColorCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class RawColorCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [RawColorCreateManyUserInput], {
    nullable: false
  })
  data!: RawColorCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
