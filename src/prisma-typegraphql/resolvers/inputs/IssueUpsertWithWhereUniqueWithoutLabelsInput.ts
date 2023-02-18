import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutLabelsInput } from "../inputs/IssueCreateWithoutLabelsInput";
import { IssueUpdateWithoutLabelsInput } from "../inputs/IssueUpdateWithoutLabelsInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutLabelsInput", {
  isAbstract: true
})
export class IssueUpsertWithWhereUniqueWithoutLabelsInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutLabelsInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutLabelsInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutLabelsInput, {
    nullable: false
  })
  create!: IssueCreateWithoutLabelsInput;
}
