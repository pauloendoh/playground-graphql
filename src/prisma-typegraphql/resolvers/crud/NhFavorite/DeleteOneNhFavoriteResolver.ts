import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneNhFavoriteArgs } from "./args/DeleteOneNhFavoriteArgs";
import { NhFavorite } from "../../../models/NhFavorite";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhFavorite)
export class DeleteOneNhFavoriteResolver {
  @TypeGraphQL.Mutation(_returns => NhFavorite, {
    nullable: true
  })
  async deleteOneNhFavorite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneNhFavoriteArgs): Promise<NhFavorite | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhFavorite.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
