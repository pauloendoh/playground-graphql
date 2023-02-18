import * as TypeGraphQL from "type-graphql";
import { Issue } from "../../../models/Issue";
import { User } from "../../../models/User";
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
}
