"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const dotenv_1 = require("dotenv");
const RecipeRepository_1 = require("./RecipeRepository");
(0, dotenv_1.config)();
class RecipeService {
    recipeRepo;
    constructor(recipeRepo = new RecipeRepository_1.RecipeRepository()) {
        this.recipeRepo = recipeRepo;
    }
    saveRecipe(input, userId) {
        if (input.id)
            return this.updateRecipe(input, userId);
        return this.createRecipe(input, userId);
    }
    createRecipe(input, userId) {
        return this.recipeRepo.createRecipe(input, userId);
    }
    updateRecipe(input, userId) {
        return this.recipeRepo.updateRecipe(input, userId);
    }
    getRecipes(userId) {
        return this.recipeRepo.getRecipes(userId);
    }
    async deleteRecipe(recipeId, userId) {
        const success = await this.recipeRepo.deleteRecipe(recipeId, userId);
        return !!success;
    }
}
exports.RecipeService = RecipeService;
