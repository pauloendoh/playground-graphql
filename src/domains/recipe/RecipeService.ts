import { config } from "dotenv";
import { RecipeRepository } from "./RecipeRepository";
import { RecipeValidInput } from "./types/RecipeValidInput";

config();

export class RecipeService {
  constructor(private recipeRepo = new RecipeRepository()) {}

  saveRecipe(input: RecipeValidInput, userId: string) {
    if (input.id) return this.updateRecipe(input, userId);

    return this.createRecipe(input, userId);
  }

  createRecipe(input: RecipeValidInput, userId: string) {
    return this.recipeRepo.createRecipe(input, userId);
  }

  updateRecipe(input: RecipeValidInput, userId: string) {
    return this.recipeRepo.updateRecipe(input, userId);
  }

  getRecipes(userId: string) {
    return this.recipeRepo.getRecipes(userId);
  }

  async deleteRecipe(recipeId: string, userId: string) {
    const success = await this.recipeRepo.deleteRecipe(recipeId, userId);
    return !!success;
  }
}
