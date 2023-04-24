import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyNhFavoriteArgs } from "./args/FindManyNhFavoriteArgs";
import { NhFavorite } from "../../../models/NhFavorite";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhFavorite)
export class FindManyNhFavoriteResolver {
  @TypeGraphQL.Query(_returns => [NhFavorite], {
    nullable: false
  })
  async nhFavorites(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNhFavoriteArgs): Promise<NhFavorite[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhFavorite.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
