import * as TypeGraphQL from "type-graphql";
import { Issue } from "../../../models/Issue";
import { IssueLabel } from "../../../models/IssueLabel";
import { User } from "../../../models/User";
import { IssueLabelsArgs } from "./args/IssueLabelsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Issue)
export class IssueRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).issue.findUnique({
      where: {
        id: issue.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [IssueLabel], {
    nullable: false
  })
  async labels(@TypeGraphQL.Root() issue: Issue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: IssueLabelsArgs): Promise<IssueLabel[]> {
    return getPrismaFromContext(ctx).issue.findUnique({
      where: {
        id: issue.id,
      },
    }).labels(args);
  }
}
