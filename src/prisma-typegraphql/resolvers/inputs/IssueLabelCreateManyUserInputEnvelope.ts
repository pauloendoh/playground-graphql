import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateManyUserInput } from "../inputs/IssueLabelCreateManyUserInput";

@TypeGraphQL.InputType("IssueLabelCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class IssueLabelCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueLabelCreateManyUserInput], {
    nullable: false
  })
  data!: IssueLabelCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
