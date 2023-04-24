import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstNhFavoriteArgs } from "./args/FindFirstNhFavoriteArgs";
import { NhFavorite } from "../../../models/NhFavorite";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhFavorite)
export class FindFirstNhFavoriteResolver {
  @TypeGraphQL.Query(_returns => NhFavorite, {
    nullable: true
  })
  async findFirstNhFavorite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNhFavoriteArgs): Promise<NhFavorite | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhFavorite.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
