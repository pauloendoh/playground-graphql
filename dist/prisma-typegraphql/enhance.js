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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib = __importStar(require("tslib"));
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Recipe: crudResolvers.RecipeCrudResolver,
    CurrentSaving: crudResolvers.CurrentSavingCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Recipe: {
        aggregateRecipe: actionResolvers.AggregateRecipeResolver,
        createManyRecipe: actionResolvers.CreateManyRecipeResolver,
        createOneRecipe: actionResolvers.CreateOneRecipeResolver,
        deleteManyRecipe: actionResolvers.DeleteManyRecipeResolver,
        deleteOneRecipe: actionResolvers.DeleteOneRecipeResolver,
        findFirstRecipe: actionResolvers.FindFirstRecipeResolver,
        findFirstRecipeOrThrow: actionResolvers.FindFirstRecipeOrThrowResolver,
        recipes: actionResolvers.FindManyRecipeResolver,
        recipe: actionResolvers.FindUniqueRecipeResolver,
        getRecipe: actionResolvers.FindUniqueRecipeOrThrowResolver,
        groupByRecipe: actionResolvers.GroupByRecipeResolver,
        updateManyRecipe: actionResolvers.UpdateManyRecipeResolver,
        updateOneRecipe: actionResolvers.UpdateOneRecipeResolver,
        upsertOneRecipe: actionResolvers.UpsertOneRecipeResolver
    },
    CurrentSaving: {
        aggregateCurrentSaving: actionResolvers.AggregateCurrentSavingResolver,
        createManyCurrentSaving: actionResolvers.CreateManyCurrentSavingResolver,
        createOneCurrentSaving: actionResolvers.CreateOneCurrentSavingResolver,
        deleteManyCurrentSaving: actionResolvers.DeleteManyCurrentSavingResolver,
        deleteOneCurrentSaving: actionResolvers.DeleteOneCurrentSavingResolver,
        findFirstCurrentSaving: actionResolvers.FindFirstCurrentSavingResolver,
        findFirstCurrentSavingOrThrow: actionResolvers.FindFirstCurrentSavingOrThrowResolver,
        currentSavings: actionResolvers.FindManyCurrentSavingResolver,
        currentSaving: actionResolvers.FindUniqueCurrentSavingResolver,
        getCurrentSaving: actionResolvers.FindUniqueCurrentSavingOrThrowResolver,
        groupByCurrentSaving: actionResolvers.GroupByCurrentSavingResolver,
        updateManyCurrentSaving: actionResolvers.UpdateManyCurrentSavingResolver,
        updateOneCurrentSaving: actionResolvers.UpdateOneCurrentSavingResolver,
        upsertOneCurrentSaving: actionResolvers.UpsertOneCurrentSavingResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Recipe: ["aggregateRecipe", "createManyRecipe", "createOneRecipe", "deleteManyRecipe", "deleteOneRecipe", "findFirstRecipe", "findFirstRecipeOrThrow", "recipes", "recipe", "getRecipe", "groupByRecipe", "updateManyRecipe", "updateOneRecipe", "upsertOneRecipe"],
    CurrentSaving: ["aggregateCurrentSaving", "createManyCurrentSaving", "createOneCurrentSaving", "deleteManyCurrentSaving", "deleteOneCurrentSaving", "findFirstCurrentSaving", "findFirstCurrentSavingOrThrow", "currentSavings", "currentSaving", "getCurrentSaving", "groupByCurrentSaving", "updateManyCurrentSaving", "updateOneCurrentSaving", "upsertOneCurrentSaving"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateRecipeArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyRecipeArgs: ["data", "skipDuplicates"],
    CreateOneRecipeArgs: ["data"],
    DeleteManyRecipeArgs: ["where"],
    DeleteOneRecipeArgs: ["where"],
    FindFirstRecipeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstRecipeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyRecipeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueRecipeArgs: ["where"],
    FindUniqueRecipeOrThrowArgs: ["where"],
    GroupByRecipeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyRecipeArgs: ["data", "where"],
    UpdateOneRecipeArgs: ["data", "where"],
    UpsertOneRecipeArgs: ["where", "create", "update"],
    AggregateCurrentSavingArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCurrentSavingArgs: ["data", "skipDuplicates"],
    CreateOneCurrentSavingArgs: ["data"],
    DeleteManyCurrentSavingArgs: ["where"],
    DeleteOneCurrentSavingArgs: ["where"],
    FindFirstCurrentSavingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCurrentSavingOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCurrentSavingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCurrentSavingArgs: ["where"],
    FindUniqueCurrentSavingOrThrowArgs: ["where"],
    GroupByCurrentSavingArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCurrentSavingArgs: ["data", "where"],
    UpdateOneCurrentSavingArgs: ["data", "where"],
    UpsertOneCurrentSavingArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Recipe: relationResolvers.RecipeRelationsResolver,
    CurrentSaving: relationResolvers.CurrentSavingRelationsResolver
};
const relationResolversInfo = {
    User: ["recipe", "currentSavings"],
    Recipe: ["user"],
    CurrentSaving: ["user"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "username", "email", "password", "createdAt", "updatedAt"],
    Recipe: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
    CurrentSaving: ["id", "userId", "value", "createdAt", "updatedAt"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "username", "email", "password", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateRecipe: ["_count", "_min", "_max"],
    RecipeGroupBy: ["id", "userId", "title", "description", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateCurrentSaving: ["_count", "_avg", "_sum", "_min", "_max"],
    CurrentSavingGroupBy: ["id", "userId", "value", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["recipe", "currentSavings"],
    UserCountAggregate: ["id", "username", "email", "password", "createdAt", "updatedAt", "_all"],
    UserMinAggregate: ["id", "username", "email", "password", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "username", "email", "password", "createdAt", "updatedAt"],
    RecipeCountAggregate: ["id", "userId", "title", "description", "createdAt", "updatedAt", "_all"],
    RecipeMinAggregate: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
    RecipeMaxAggregate: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
    CurrentSavingCountAggregate: ["id", "userId", "value", "createdAt", "updatedAt", "_all"],
    CurrentSavingAvgAggregate: ["value"],
    CurrentSavingSumAggregate: ["value"],
    CurrentSavingMinAggregate: ["id", "userId", "value", "createdAt", "updatedAt"],
    CurrentSavingMaxAggregate: ["id", "userId", "value", "createdAt", "updatedAt"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "currentSavings"],
    UserOrderByWithRelationInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "currentSavings"],
    UserWhereUniqueInput: ["id", "username", "email"],
    UserOrderByWithAggregationInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "username", "email", "password", "createdAt", "updatedAt"],
    RecipeWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "title", "description", "createdAt", "updatedAt"],
    RecipeOrderByWithRelationInput: ["id", "userId", "user", "title", "description", "createdAt", "updatedAt"],
    RecipeWhereUniqueInput: ["id"],
    RecipeOrderByWithAggregationInput: ["id", "userId", "title", "description", "createdAt", "updatedAt", "_count", "_max", "_min"],
    RecipeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "title", "description", "createdAt", "updatedAt"],
    CurrentSavingWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "value", "createdAt", "updatedAt"],
    CurrentSavingOrderByWithRelationInput: ["id", "userId", "user", "value", "createdAt", "updatedAt"],
    CurrentSavingWhereUniqueInput: ["id"],
    CurrentSavingOrderByWithAggregationInput: ["id", "userId", "value", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    CurrentSavingScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "value", "createdAt", "updatedAt"],
    UserCreateInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "currentSavings"],
    UserUpdateInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "currentSavings"],
    UserCreateManyInput: ["id", "username", "email", "password", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["id", "username", "email", "password", "createdAt", "updatedAt"],
    RecipeCreateInput: ["id", "user", "title", "description", "createdAt", "updatedAt"],
    RecipeUpdateInput: ["id", "user", "title", "description", "createdAt", "updatedAt"],
    RecipeCreateManyInput: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
    RecipeUpdateManyMutationInput: ["id", "title", "description", "createdAt", "updatedAt"],
    CurrentSavingCreateInput: ["id", "user", "value", "createdAt", "updatedAt"],
    CurrentSavingUpdateInput: ["id", "user", "value", "createdAt", "updatedAt"],
    CurrentSavingCreateManyInput: ["id", "userId", "value", "createdAt", "updatedAt"],
    CurrentSavingUpdateManyMutationInput: ["id", "value", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    RecipeListRelationFilter: ["every", "some", "none"],
    CurrentSavingListRelationFilter: ["every", "some", "none"],
    RecipeOrderByRelationAggregateInput: ["_count"],
    CurrentSavingOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "username", "email", "password", "createdAt", "updatedAt"],
    UserMaxOrderByAggregateInput: ["id", "username", "email", "password", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "username", "email", "password", "createdAt", "updatedAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    UserRelationFilter: ["is", "isNot"],
    RecipeCountOrderByAggregateInput: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
    RecipeMaxOrderByAggregateInput: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
    RecipeMinOrderByAggregateInput: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
    DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    CurrentSavingCountOrderByAggregateInput: ["id", "userId", "value", "createdAt", "updatedAt"],
    CurrentSavingAvgOrderByAggregateInput: ["value"],
    CurrentSavingMaxOrderByAggregateInput: ["id", "userId", "value", "createdAt", "updatedAt"],
    CurrentSavingMinOrderByAggregateInput: ["id", "userId", "value", "createdAt", "updatedAt"],
    CurrentSavingSumOrderByAggregateInput: ["value"],
    DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    RecipeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    CurrentSavingCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    RecipeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CurrentSavingUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutRecipeInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutRecipeNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutCurrentSavingsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutCurrentSavingsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    RecipeCreateWithoutUserInput: ["id", "title", "description", "createdAt", "updatedAt"],
    RecipeCreateOrConnectWithoutUserInput: ["where", "create"],
    RecipeCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    CurrentSavingCreateWithoutUserInput: ["id", "value", "createdAt", "updatedAt"],
    CurrentSavingCreateOrConnectWithoutUserInput: ["where", "create"],
    CurrentSavingCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    RecipeUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    RecipeUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    RecipeUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    RecipeScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "title", "description", "createdAt", "updatedAt"],
    CurrentSavingUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    CurrentSavingUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    CurrentSavingUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    CurrentSavingScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "value", "createdAt", "updatedAt"],
    UserCreateWithoutRecipeInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "currentSavings"],
    UserCreateOrConnectWithoutRecipeInput: ["where", "create"],
    UserUpsertWithoutRecipeInput: ["update", "create"],
    UserUpdateWithoutRecipeInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "currentSavings"],
    UserCreateWithoutCurrentSavingsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe"],
    UserCreateOrConnectWithoutCurrentSavingsInput: ["where", "create"],
    UserUpsertWithoutCurrentSavingsInput: ["update", "create"],
    UserUpdateWithoutCurrentSavingsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe"],
    RecipeCreateManyUserInput: ["id", "title", "description", "createdAt", "updatedAt"],
    CurrentSavingCreateManyUserInput: ["id", "value", "createdAt", "updatedAt"],
    RecipeUpdateWithoutUserInput: ["id", "title", "description", "createdAt", "updatedAt"],
    CurrentSavingUpdateWithoutUserInput: ["id", "value", "createdAt", "updatedAt"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
