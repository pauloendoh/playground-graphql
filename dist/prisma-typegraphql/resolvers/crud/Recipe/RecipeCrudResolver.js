"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateRecipeArgs_1 = require("./args/AggregateRecipeArgs");
const CreateManyRecipeArgs_1 = require("./args/CreateManyRecipeArgs");
const CreateOneRecipeArgs_1 = require("./args/CreateOneRecipeArgs");
const DeleteManyRecipeArgs_1 = require("./args/DeleteManyRecipeArgs");
const DeleteOneRecipeArgs_1 = require("./args/DeleteOneRecipeArgs");
const FindFirstRecipeArgs_1 = require("./args/FindFirstRecipeArgs");
const FindFirstRecipeOrThrowArgs_1 = require("./args/FindFirstRecipeOrThrowArgs");
const FindManyRecipeArgs_1 = require("./args/FindManyRecipeArgs");
const FindUniqueRecipeArgs_1 = require("./args/FindUniqueRecipeArgs");
const FindUniqueRecipeOrThrowArgs_1 = require("./args/FindUniqueRecipeOrThrowArgs");
const GroupByRecipeArgs_1 = require("./args/GroupByRecipeArgs");
const UpdateManyRecipeArgs_1 = require("./args/UpdateManyRecipeArgs");
const UpdateOneRecipeArgs_1 = require("./args/UpdateOneRecipeArgs");
const UpsertOneRecipeArgs_1 = require("./args/UpsertOneRecipeArgs");
const helpers_1 = require("../../../helpers");
const Recipe_1 = require("../../../models/Recipe");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRecipe_1 = require("../../outputs/AggregateRecipe");
const RecipeGroupBy_1 = require("../../outputs/RecipeGroupBy");
let RecipeCrudResolver = class RecipeCrudResolver {
    async aggregateRecipe(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyRecipe(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneRecipe(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRecipe(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneRecipe(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRecipe(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRecipeOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async recipes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async recipe(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getRecipe(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByRecipe(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyRecipe(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneRecipe(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneRecipe(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).recipe.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateRecipe_1.AggregateRecipe, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateRecipeArgs_1.AggregateRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "aggregateRecipe", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyRecipeArgs_1.CreateManyRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "createManyRecipe", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Recipe_1.Recipe, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneRecipeArgs_1.CreateOneRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "createOneRecipe", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyRecipeArgs_1.DeleteManyRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "deleteManyRecipe", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Recipe_1.Recipe, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneRecipeArgs_1.DeleteOneRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "deleteOneRecipe", null);
__decorate([
    TypeGraphQL.Query(_returns => Recipe_1.Recipe, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstRecipeArgs_1.FindFirstRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "findFirstRecipe", null);
__decorate([
    TypeGraphQL.Query(_returns => Recipe_1.Recipe, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstRecipeOrThrowArgs_1.FindFirstRecipeOrThrowArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "findFirstRecipeOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Recipe_1.Recipe], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyRecipeArgs_1.FindManyRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "recipes", null);
__decorate([
    TypeGraphQL.Query(_returns => Recipe_1.Recipe, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueRecipeArgs_1.FindUniqueRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "recipe", null);
__decorate([
    TypeGraphQL.Query(_returns => Recipe_1.Recipe, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueRecipeOrThrowArgs_1.FindUniqueRecipeOrThrowArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "getRecipe", null);
__decorate([
    TypeGraphQL.Query(_returns => [RecipeGroupBy_1.RecipeGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByRecipeArgs_1.GroupByRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "groupByRecipe", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyRecipeArgs_1.UpdateManyRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "updateManyRecipe", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Recipe_1.Recipe, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneRecipeArgs_1.UpdateOneRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "updateOneRecipe", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Recipe_1.Recipe, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneRecipeArgs_1.UpsertOneRecipeArgs]),
    __metadata("design:returntype", Promise)
], RecipeCrudResolver.prototype, "upsertOneRecipe", null);
RecipeCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Recipe_1.Recipe)
], RecipeCrudResolver);
exports.RecipeCrudResolver = RecipeCrudResolver;
