import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingCreateManyUserInput } from "../inputs/SavingCreateManyUserInput";

@TypeGraphQL.InputType("SavingCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class SavingCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SavingCreateManyUserInput], {
    nullable: false
  })
  data!: SavingCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
