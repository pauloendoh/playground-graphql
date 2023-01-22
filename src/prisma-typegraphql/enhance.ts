import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

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

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

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

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
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
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "username", "email", "password", "createdAt", "updatedAt"],
  Recipe: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
  CurrentSaving: ["id", "userId", "value", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

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

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

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

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

