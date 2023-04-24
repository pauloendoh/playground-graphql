import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByNhFavoriteArgs } from "./args/GroupByNhFavoriteArgs";
import { NhFavorite } from "../../../models/NhFavorite";
import { NhFavoriteGroupBy } from "../../outputs/NhFavoriteGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhFavorite)
export class GroupByNhFavoriteResolver {
  @TypeGraphQL.Query(_returns => [NhFavoriteGroupBy], {
    nullable: false
  })
  async groupByNhFavorite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNhFavoriteArgs): Promise<NhFavoriteGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhFavorite.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
