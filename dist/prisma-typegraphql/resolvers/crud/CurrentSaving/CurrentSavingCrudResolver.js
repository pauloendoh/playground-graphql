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
exports.CurrentSavingCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateCurrentSavingArgs_1 = require("./args/AggregateCurrentSavingArgs");
const CreateManyCurrentSavingArgs_1 = require("./args/CreateManyCurrentSavingArgs");
const CreateOneCurrentSavingArgs_1 = require("./args/CreateOneCurrentSavingArgs");
const DeleteManyCurrentSavingArgs_1 = require("./args/DeleteManyCurrentSavingArgs");
const DeleteOneCurrentSavingArgs_1 = require("./args/DeleteOneCurrentSavingArgs");
const FindFirstCurrentSavingArgs_1 = require("./args/FindFirstCurrentSavingArgs");
const FindFirstCurrentSavingOrThrowArgs_1 = require("./args/FindFirstCurrentSavingOrThrowArgs");
const FindManyCurrentSavingArgs_1 = require("./args/FindManyCurrentSavingArgs");
const FindUniqueCurrentSavingArgs_1 = require("./args/FindUniqueCurrentSavingArgs");
const FindUniqueCurrentSavingOrThrowArgs_1 = require("./args/FindUniqueCurrentSavingOrThrowArgs");
const GroupByCurrentSavingArgs_1 = require("./args/GroupByCurrentSavingArgs");
const UpdateManyCurrentSavingArgs_1 = require("./args/UpdateManyCurrentSavingArgs");
const UpdateOneCurrentSavingArgs_1 = require("./args/UpdateOneCurrentSavingArgs");
const UpsertOneCurrentSavingArgs_1 = require("./args/UpsertOneCurrentSavingArgs");
const helpers_1 = require("../../../helpers");
const CurrentSaving_1 = require("../../../models/CurrentSaving");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCurrentSaving_1 = require("../../outputs/AggregateCurrentSaving");
const CurrentSavingGroupBy_1 = require("../../outputs/CurrentSavingGroupBy");
let CurrentSavingCrudResolver = class CurrentSavingCrudResolver {
    async aggregateCurrentSaving(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyCurrentSaving(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCurrentSaving(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCurrentSaving(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCurrentSaving(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCurrentSaving(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCurrentSavingOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async currentSavings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async currentSaving(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getCurrentSaving(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCurrentSaving(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCurrentSaving(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCurrentSaving(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCurrentSaving(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).currentSaving.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateCurrentSaving_1.AggregateCurrentSaving, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCurrentSavingArgs_1.AggregateCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "aggregateCurrentSaving", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyCurrentSavingArgs_1.CreateManyCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "createManyCurrentSaving", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CurrentSaving_1.CurrentSaving, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneCurrentSavingArgs_1.CreateOneCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "createOneCurrentSaving", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyCurrentSavingArgs_1.DeleteManyCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "deleteManyCurrentSaving", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CurrentSaving_1.CurrentSaving, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneCurrentSavingArgs_1.DeleteOneCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "deleteOneCurrentSaving", null);
__decorate([
    TypeGraphQL.Query(_returns => CurrentSaving_1.CurrentSaving, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstCurrentSavingArgs_1.FindFirstCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "findFirstCurrentSaving", null);
__decorate([
    TypeGraphQL.Query(_returns => CurrentSaving_1.CurrentSaving, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstCurrentSavingOrThrowArgs_1.FindFirstCurrentSavingOrThrowArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "findFirstCurrentSavingOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [CurrentSaving_1.CurrentSaving], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyCurrentSavingArgs_1.FindManyCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "currentSavings", null);
__decorate([
    TypeGraphQL.Query(_returns => CurrentSaving_1.CurrentSaving, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueCurrentSavingArgs_1.FindUniqueCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "currentSaving", null);
__decorate([
    TypeGraphQL.Query(_returns => CurrentSaving_1.CurrentSaving, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueCurrentSavingOrThrowArgs_1.FindUniqueCurrentSavingOrThrowArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "getCurrentSaving", null);
__decorate([
    TypeGraphQL.Query(_returns => [CurrentSavingGroupBy_1.CurrentSavingGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByCurrentSavingArgs_1.GroupByCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "groupByCurrentSaving", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyCurrentSavingArgs_1.UpdateManyCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "updateManyCurrentSaving", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CurrentSaving_1.CurrentSaving, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneCurrentSavingArgs_1.UpdateOneCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "updateOneCurrentSaving", null);
__decorate([
    TypeGraphQL.Mutation(_returns => CurrentSaving_1.CurrentSaving, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneCurrentSavingArgs_1.UpsertOneCurrentSavingArgs]),
    __metadata("design:returntype", Promise)
], CurrentSavingCrudResolver.prototype, "upsertOneCurrentSaving", null);
CurrentSavingCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => CurrentSaving_1.CurrentSaving)
], CurrentSavingCrudResolver);
exports.CurrentSavingCrudResolver = CurrentSavingCrudResolver;
