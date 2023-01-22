import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Recipe } from "../../prisma-typegraphql";
import { isAuth } from "../../utils/auth/isAuth";
import { MyContext } from "../../utils/auth/MyContext";
import { RecipeService } from "./RecipeService";
import { RecipeValidInput } from "./types/RecipeValidInput";

@Resolver()
export class RecipeResolver {
  constructor(private recipeService = new RecipeService()) {}

  @Query(() => [Recipe])
  @UseMiddleware(isAuth)
  async getRecipesQuery(@Ctx() { req }: MyContext): Promise<Recipe[]> {
    return this.recipeService.getRecipes(req.user.id);
  }

  @Mutation(() => Recipe)
  @UseMiddleware(isAuth)
  async saveRecipeMutation(
    @Ctx() { req }: MyContext,
    @Arg("data") data: RecipeValidInput
  ) {
    return this.recipeService.saveRecipe(data, req.user.id);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteRecipeMutation(
    @Ctx() { req }: MyContext,
    @Arg("recipeId") recipeId: string
  ) {
    return this.recipeService.deleteRecipe(recipeId, req.user.id);
  }
}
