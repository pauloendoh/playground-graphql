import * as TypeGraphQL from "type-graphql";
import { Issue } from "../../../models/Issue";
import { IssueLabel } from "../../../models/IssueLabel";
import { User } from "../../../models/User";
import { IssueLabelIssuesArgs } from "./args/IssueLabelIssuesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IssueLabel)
export class IssueLabelRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() issueLabel: IssueLabel, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).issueLabel.findUnique({
      where: {
        id: issueLabel.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Issue], {
    nullable: false
  })
  async issues(@TypeGraphQL.Root() issueLabel: IssueLabel, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: IssueLabelIssuesArgs): Promise<Issue[]> {
    return getPrismaFromContext(ctx).issueLabel.findUnique({
      where: {
        id: issueLabel.id,
      },
    }).issues(args);
  }
}
