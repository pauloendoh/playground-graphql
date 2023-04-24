import * as TypeGraphQL from "type-graphql";
import { NhAuthor } from "../../../models/NhAuthor";
import { NhFavorite } from "../../../models/NhFavorite";
import { User } from "../../../models/User";
import { NhAuthorFavoritesArgs } from "./args/NhAuthorFavoritesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhAuthor)
export class NhAuthorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() nhAuthor: NhAuthor, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).nhAuthor.findUnique({
      where: {
        url: nhAuthor.url,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [NhFavorite], {
    nullable: false
  })
  async favorites(@TypeGraphQL.Root() nhAuthor: NhAuthor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: NhAuthorFavoritesArgs): Promise<NhFavorite[]> {
    return getPrismaFromContext(ctx).nhAuthor.findUnique({
      where: {
        url: nhAuthor.url,
      },
    }).favorites(args);
  }
}
