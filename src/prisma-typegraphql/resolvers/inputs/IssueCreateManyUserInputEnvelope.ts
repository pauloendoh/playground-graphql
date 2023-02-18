import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyUserInput } from "../inputs/IssueCreateManyUserInput";

@TypeGraphQL.InputType("IssueCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class IssueCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueCreateManyUserInput], {
    nullable: false
  })
  data!: IssueCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
