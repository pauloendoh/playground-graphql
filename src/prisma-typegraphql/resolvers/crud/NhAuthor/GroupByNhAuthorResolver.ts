import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByNhAuthorArgs } from "./args/GroupByNhAuthorArgs";
import { NhAuthor } from "../../../models/NhAuthor";
import { NhAuthorGroupBy } from "../../outputs/NhAuthorGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhAuthor)
export class GroupByNhAuthorResolver {
  @TypeGraphQL.Query(_returns => [NhAuthorGroupBy], {
    nullable: false
  })
  async groupByNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNhAuthorArgs): Promise<NhAuthorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
