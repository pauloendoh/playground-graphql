import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNhFavoriteArgs } from "./args/FindUniqueNhFavoriteArgs";
import { NhFavorite } from "../../../models/NhFavorite";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhFavorite)
export class FindUniqueNhFavoriteResolver {
  @TypeGraphQL.Query(_returns => NhFavorite, {
    nullable: true
  })
  async nhFavorite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNhFavoriteArgs): Promise<NhFavorite | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhFavorite.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
