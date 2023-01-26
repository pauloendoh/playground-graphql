import { myPrismaClient } from '../../utils/myPrismaClient'
import { RecipeInput } from './types/RecipeInput'

export class RecipeRepository {
  constructor(private prismaClient = myPrismaClient) {}

  createRecipe(input: RecipeInput, userId: string) {
    return this.prismaClient.recipe.create({
      data: {
        ...input,
        userId,
        user: undefined,
        updatedAt: undefined,
      },
    })
  }

  userOwnsRecipe(recipeId: string, userId: string) {
    return this.prismaClient.recipe.findFirst({
      where: {
        id: recipeId,
        userId,
      },
    })
  }

  updateRecipe(input: RecipeInput, userId: string) {
    return this.prismaClient.recipe.update({
      data: {
        ...input,
        userId,
        user: undefined,
        updatedAt: undefined,
      },
      where: {
        id: input.id,
      },
    })
  }

  getRecipes(userId: string) {
    return this.prismaClient.recipe.findMany({
      where: {
        userId,
      },
    })
  }

  deleteRecipe(recipeId: string, userId: string) {
    return this.prismaClient.recipe.delete({
      where: {
        id: recipeId,
      },
    })
  }
}
