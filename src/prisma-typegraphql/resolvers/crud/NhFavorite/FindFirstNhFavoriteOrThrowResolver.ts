import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstNhFavoriteOrThrowArgs } from "./args/FindFirstNhFavoriteOrThrowArgs";
import { NhFavorite } from "../../../models/NhFavorite";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhFavorite)
export class FindFirstNhFavoriteOrThrowResolver {
  @TypeGraphQL.Query(_returns => NhFavorite, {
    nullable: true
  })
  async findFirstNhFavoriteOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNhFavoriteOrThrowArgs): Promise<NhFavorite | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhFavorite.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
