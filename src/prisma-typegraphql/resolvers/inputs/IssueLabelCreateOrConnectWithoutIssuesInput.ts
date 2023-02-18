import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateWithoutIssuesInput } from "../inputs/IssueLabelCreateWithoutIssuesInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelCreateOrConnectWithoutIssuesInput", {
  isAbstract: true
})
export class IssueLabelCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: IssueLabelCreateWithoutIssuesInput;
}
