import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingCreateManyUserInput } from "../inputs/CurrentSavingCreateManyUserInput";

@TypeGraphQL.InputType("CurrentSavingCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class CurrentSavingCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [CurrentSavingCreateManyUserInput], {
    nullable: false
  })
  data!: CurrentSavingCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
