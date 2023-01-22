"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const prisma_typegraphql_1 = require("../../prisma-typegraphql");
const isAuth_1 = require("../../utils/auth/isAuth");
const RecipeService_1 = require("./RecipeService");
const RecipeValidInput_1 = require("./types/RecipeValidInput");
let RecipeResolver = class RecipeResolver {
    recipeService;
    constructor(recipeService = new RecipeService_1.RecipeService()) {
        this.recipeService = recipeService;
    }
    async getRecipesQuery({ req }) {
        return this.recipeService.getRecipes(req.user.id);
    }
    async saveRecipeMutation({ req }, data) {
        return this.recipeService.saveRecipe(data, req.user.id);
    }
    async deleteRecipeMutation({ req }, recipeId) {
        return this.recipeService.deleteRecipe(recipeId, req.user.id);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [prisma_typegraphql_1.Recipe]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "getRecipesQuery", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => prisma_typegraphql_1.Recipe),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, RecipeValidInput_1.RecipeValidInput]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "saveRecipeMutation", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("recipeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "deleteRecipeMutation", null);
RecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Object])
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;
