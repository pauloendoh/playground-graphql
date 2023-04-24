import * as TypeGraphQL from "type-graphql";
import { NhAuthor } from "../../../models/NhAuthor";
import { NhFavorite } from "../../../models/NhFavorite";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhFavorite)
export class NhFavoriteRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => NhAuthor, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() nhFavorite: NhFavorite, @TypeGraphQL.Ctx() ctx: any): Promise<NhAuthor> {
    return getPrismaFromContext(ctx).nhFavorite.findUnique({
      where: {
        url: nhFavorite.url,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() nhFavorite: NhFavorite, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).nhFavorite.findUnique({
      where: {
        url: nhFavorite.url,
      },
    }).user({});
  }
}
