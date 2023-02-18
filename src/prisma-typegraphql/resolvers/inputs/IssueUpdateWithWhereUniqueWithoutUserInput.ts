import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueUpdateWithoutUserInput } from "../inputs/IssueUpdateWithoutUserInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class IssueUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutUserInput, {
    nullable: false
  })
  data!: IssueUpdateWithoutUserInput;
}
