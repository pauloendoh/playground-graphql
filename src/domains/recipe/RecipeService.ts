import { config } from 'dotenv'
import { RecipeRepository } from './RecipeRepository'
import { RecipeInput } from './types/RecipeInput'

config()

export class RecipeService {
  constructor(private recipeRepo = new RecipeRepository()) {}

  saveRecipe(input: RecipeInput, userId: string) {
    if (input.id) return this.updateRecipe(input, userId)

    return this.createRecipe(input, userId)
  }

  createRecipe(input: RecipeInput, userId: string) {
    return this.recipeRepo.createRecipe(input, userId)
  }

  updateRecipe(input: RecipeInput, userId: string) {
    const isAllowed = this.recipeRepo.userOwnsRecipe(input.id!, userId)
    if (!isAllowed) throw new Error('You are not allowed to update this recipe')

    return this.recipeRepo.updateRecipe(input, userId)
  }

  getRecipes(userId: string) {
    return this.recipeRepo.getRecipes(userId)
  }

  async deleteRecipe(recipeId: string, userId: string) {
    const success = await this.recipeRepo.deleteRecipe(recipeId, userId)
    return !!success
  }
}
