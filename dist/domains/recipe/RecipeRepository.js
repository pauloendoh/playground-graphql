"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRepository = void 0;
const myPrismaClient_1 = require("../../utils/myPrismaClient");
class RecipeRepository {
    prismaClient;
    constructor(prismaClient = myPrismaClient_1.myPrismaClient) {
        this.prismaClient = prismaClient;
    }
    createRecipe(input, userId) {
        return this.prismaClient.recipe.create({
            data: {
                ...input,
                userId,
            },
        });
    }
    updateRecipe(input, userId) {
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
    getRecipes(userId) {
        return this.prismaClient.recipe.findMany({
            where: {
                userId,
            },
        });
    }
    deleteRecipe(recipeId, userId) {
        return this.prismaClient.recipe.delete({
            where: {
                id: recipeId,
            },
        });
    }
}
exports.RecipeRepository = RecipeRepository;
