import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateWithoutIssuesInput } from "../inputs/IssueLabelCreateWithoutIssuesInput";
import { IssueLabelUpdateWithoutIssuesInput } from "../inputs/IssueLabelUpdateWithoutIssuesInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelUpsertWithWhereUniqueWithoutIssuesInput", {
  isAbstract: true
})
export class IssueLabelUpsertWithWhereUniqueWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: IssueLabelUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => IssueLabelCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: IssueLabelCreateWithoutIssuesInput;
}
