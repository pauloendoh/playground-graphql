import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelUpdateWithoutIssuesInput } from "../inputs/IssueLabelUpdateWithoutIssuesInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelUpdateWithWhereUniqueWithoutIssuesInput", {
  isAbstract: true
})
export class IssueLabelUpdateWithWhereUniqueWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelUpdateWithoutIssuesInput, {
    nullable: false
  })
  data!: IssueLabelUpdateWithoutIssuesInput;
}
