import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueUpdateWithoutLabelsInput } from "../inputs/IssueUpdateWithoutLabelsInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutLabelsInput", {
  isAbstract: true
})
export class IssueUpdateWithWhereUniqueWithoutLabelsInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutLabelsInput, {
    nullable: false
  })
  data!: IssueUpdateWithoutLabelsInput;
}
