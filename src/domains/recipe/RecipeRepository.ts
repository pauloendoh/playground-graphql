import { myPrismaClient } from "../../utils/myPrismaClient";
import { RecipeValidInput } from "./types/RecipeValidInput";

export class RecipeRepository {
  constructor(private prismaClient = myPrismaClient) {}

  createRecipe(input: RecipeValidInput, userId: string) {
    return this.prismaClient.recipe.create({
      data: {
        ...input,
        userId,
      },
    });
  }

  updateRecipe(input: RecipeValidInput, userId: string) {
    return this.prismaClient.recipe.update({
      data: {
        ...input,
        userId,
      },
      where: {
        id: input.id,
      },
    });
  }

  getRecipes(userId: string) {
    return this.prismaClient.recipe.findMany({
      where: {
        userId,
      },
    });
  }

  deleteRecipe(recipeId: string, userId: string) {
    return this.prismaClient.recipe.delete({
      where: {
        id: recipeId,
      },
    });
  }
}
