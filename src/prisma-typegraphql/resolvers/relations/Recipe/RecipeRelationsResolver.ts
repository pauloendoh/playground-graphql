import * as TypeGraphQL from "type-graphql";
import { Recipe } from "../../../models/Recipe";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recipe)
export class RecipeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() recipe: Recipe, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).recipe.findUnique({
      where: {
        id: recipe.id,
      },
    }).user({});
  }
}
