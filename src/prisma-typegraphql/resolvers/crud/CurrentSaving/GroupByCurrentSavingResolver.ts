import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCurrentSavingArgs } from "./args/GroupByCurrentSavingArgs";
import { CurrentSaving } from "../../../models/CurrentSaving";
import { CurrentSavingGroupBy } from "../../outputs/CurrentSavingGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CurrentSaving)
export class GroupByCurrentSavingResolver {
  @TypeGraphQL.Query(_returns => [CurrentSavingGroupBy], {
    nullable: false
  })
  async groupByCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCurrentSavingArgs): Promise<CurrentSavingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
