import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutUserInput } from "../inputs/IssueCreateWithoutUserInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class IssueCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutUserInput, {
    nullable: false
  })
  create!: IssueCreateWithoutUserInput;
}
