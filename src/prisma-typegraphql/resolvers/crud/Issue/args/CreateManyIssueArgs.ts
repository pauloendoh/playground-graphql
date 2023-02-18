import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueCreateManyInput } from "../../../inputs/IssueCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIssueArgs {
  @TypeGraphQL.Field(_type => [IssueCreateManyInput], {
    nullable: false
  })
  data!: IssueCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
