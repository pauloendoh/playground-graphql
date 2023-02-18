import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutUserInput } from "../inputs/IssueCreateWithoutUserInput";
import { IssueUpdateWithoutUserInput } from "../inputs/IssueUpdateWithoutUserInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class IssueUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutUserInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutUserInput, {
    nullable: false
  })
  create!: IssueCreateWithoutUserInput;
}
