import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNhFavoriteArgs } from "./args/AggregateNhFavoriteArgs";
import { NhFavorite } from "../../../models/NhFavorite";
import { AggregateNhFavorite } from "../../outputs/AggregateNhFavorite";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhFavorite)
export class AggregateNhFavoriteResolver {
  @TypeGraphQL.Query(_returns => AggregateNhFavorite, {
    nullable: false
  })
  async aggregateNhFavorite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNhFavoriteArgs): Promise<AggregateNhFavorite> {
    return getPrismaFromContext(ctx).nhFavorite.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
