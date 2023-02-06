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
  Saving: crudResolvers.SavingCrudResolver,
  WishlistItem: crudResolvers.WishlistItemCrudResolver,
  Expense: crudResolvers.ExpenseCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  Salary: crudResolvers.SalaryCrudResolver
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
  Saving: {
    aggregateSaving: actionResolvers.AggregateSavingResolver,
    createManySaving: actionResolvers.CreateManySavingResolver,
    createOneSaving: actionResolvers.CreateOneSavingResolver,
    deleteManySaving: actionResolvers.DeleteManySavingResolver,
    deleteOneSaving: actionResolvers.DeleteOneSavingResolver,
    findFirstSaving: actionResolvers.FindFirstSavingResolver,
    findFirstSavingOrThrow: actionResolvers.FindFirstSavingOrThrowResolver,
    savings: actionResolvers.FindManySavingResolver,
    saving: actionResolvers.FindUniqueSavingResolver,
    getSaving: actionResolvers.FindUniqueSavingOrThrowResolver,
    groupBySaving: actionResolvers.GroupBySavingResolver,
    updateManySaving: actionResolvers.UpdateManySavingResolver,
    updateOneSaving: actionResolvers.UpdateOneSavingResolver,
    upsertOneSaving: actionResolvers.UpsertOneSavingResolver
  },
  WishlistItem: {
    aggregateWishlistItem: actionResolvers.AggregateWishlistItemResolver,
    createManyWishlistItem: actionResolvers.CreateManyWishlistItemResolver,
    createOneWishlistItem: actionResolvers.CreateOneWishlistItemResolver,
    deleteManyWishlistItem: actionResolvers.DeleteManyWishlistItemResolver,
    deleteOneWishlistItem: actionResolvers.DeleteOneWishlistItemResolver,
    findFirstWishlistItem: actionResolvers.FindFirstWishlistItemResolver,
    findFirstWishlistItemOrThrow: actionResolvers.FindFirstWishlistItemOrThrowResolver,
    wishlistItems: actionResolvers.FindManyWishlistItemResolver,
    wishlistItem: actionResolvers.FindUniqueWishlistItemResolver,
    getWishlistItem: actionResolvers.FindUniqueWishlistItemOrThrowResolver,
    groupByWishlistItem: actionResolvers.GroupByWishlistItemResolver,
    updateManyWishlistItem: actionResolvers.UpdateManyWishlistItemResolver,
    updateOneWishlistItem: actionResolvers.UpdateOneWishlistItemResolver,
    upsertOneWishlistItem: actionResolvers.UpsertOneWishlistItemResolver
  },
  Expense: {
    aggregateExpense: actionResolvers.AggregateExpenseResolver,
    createManyExpense: actionResolvers.CreateManyExpenseResolver,
    createOneExpense: actionResolvers.CreateOneExpenseResolver,
    deleteManyExpense: actionResolvers.DeleteManyExpenseResolver,
    deleteOneExpense: actionResolvers.DeleteOneExpenseResolver,
    findFirstExpense: actionResolvers.FindFirstExpenseResolver,
    findFirstExpenseOrThrow: actionResolvers.FindFirstExpenseOrThrowResolver,
    expenses: actionResolvers.FindManyExpenseResolver,
    expense: actionResolvers.FindUniqueExpenseResolver,
    getExpense: actionResolvers.FindUniqueExpenseOrThrowResolver,
    groupByExpense: actionResolvers.GroupByExpenseResolver,
    updateManyExpense: actionResolvers.UpdateManyExpenseResolver,
    updateOneExpense: actionResolvers.UpdateOneExpenseResolver,
    upsertOneExpense: actionResolvers.UpsertOneExpenseResolver
  },
  Category: {
    aggregateCategory: actionResolvers.AggregateCategoryResolver,
    createManyCategory: actionResolvers.CreateManyCategoryResolver,
    createOneCategory: actionResolvers.CreateOneCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    deleteOneCategory: actionResolvers.DeleteOneCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    findFirstCategoryOrThrow: actionResolvers.FindFirstCategoryOrThrowResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    category: actionResolvers.FindUniqueCategoryResolver,
    getCategory: actionResolvers.FindUniqueCategoryOrThrowResolver,
    groupByCategory: actionResolvers.GroupByCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    updateOneCategory: actionResolvers.UpdateOneCategoryResolver,
    upsertOneCategory: actionResolvers.UpsertOneCategoryResolver
  },
  Salary: {
    aggregateSalary: actionResolvers.AggregateSalaryResolver,
    createManySalary: actionResolvers.CreateManySalaryResolver,
    createOneSalary: actionResolvers.CreateOneSalaryResolver,
    deleteManySalary: actionResolvers.DeleteManySalaryResolver,
    deleteOneSalary: actionResolvers.DeleteOneSalaryResolver,
    findFirstSalary: actionResolvers.FindFirstSalaryResolver,
    findFirstSalaryOrThrow: actionResolvers.FindFirstSalaryOrThrowResolver,
    salaries: actionResolvers.FindManySalaryResolver,
    salary: actionResolvers.FindUniqueSalaryResolver,
    getSalary: actionResolvers.FindUniqueSalaryOrThrowResolver,
    groupBySalary: actionResolvers.GroupBySalaryResolver,
    updateManySalary: actionResolvers.UpdateManySalaryResolver,
    updateOneSalary: actionResolvers.UpdateOneSalaryResolver,
    upsertOneSalary: actionResolvers.UpsertOneSalaryResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Recipe: ["aggregateRecipe", "createManyRecipe", "createOneRecipe", "deleteManyRecipe", "deleteOneRecipe", "findFirstRecipe", "findFirstRecipeOrThrow", "recipes", "recipe", "getRecipe", "groupByRecipe", "updateManyRecipe", "updateOneRecipe", "upsertOneRecipe"],
  Saving: ["aggregateSaving", "createManySaving", "createOneSaving", "deleteManySaving", "deleteOneSaving", "findFirstSaving", "findFirstSavingOrThrow", "savings", "saving", "getSaving", "groupBySaving", "updateManySaving", "updateOneSaving", "upsertOneSaving"],
  WishlistItem: ["aggregateWishlistItem", "createManyWishlistItem", "createOneWishlistItem", "deleteManyWishlistItem", "deleteOneWishlistItem", "findFirstWishlistItem", "findFirstWishlistItemOrThrow", "wishlistItems", "wishlistItem", "getWishlistItem", "groupByWishlistItem", "updateManyWishlistItem", "updateOneWishlistItem", "upsertOneWishlistItem"],
  Expense: ["aggregateExpense", "createManyExpense", "createOneExpense", "deleteManyExpense", "deleteOneExpense", "findFirstExpense", "findFirstExpenseOrThrow", "expenses", "expense", "getExpense", "groupByExpense", "updateManyExpense", "updateOneExpense", "upsertOneExpense"],
  Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
  Salary: ["aggregateSalary", "createManySalary", "createOneSalary", "deleteManySalary", "deleteOneSalary", "findFirstSalary", "findFirstSalaryOrThrow", "salaries", "salary", "getSalary", "groupBySalary", "updateManySalary", "updateOneSalary", "upsertOneSalary"]
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
  AggregateSavingArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySavingArgs: ["data", "skipDuplicates"],
  CreateOneSavingArgs: ["data"],
  DeleteManySavingArgs: ["where"],
  DeleteOneSavingArgs: ["where"],
  FindFirstSavingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSavingOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySavingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSavingArgs: ["where"],
  FindUniqueSavingOrThrowArgs: ["where"],
  GroupBySavingArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySavingArgs: ["data", "where"],
  UpdateOneSavingArgs: ["data", "where"],
  UpsertOneSavingArgs: ["where", "create", "update"],
  AggregateWishlistItemArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWishlistItemArgs: ["data", "skipDuplicates"],
  CreateOneWishlistItemArgs: ["data"],
  DeleteManyWishlistItemArgs: ["where"],
  DeleteOneWishlistItemArgs: ["where"],
  FindFirstWishlistItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWishlistItemOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWishlistItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWishlistItemArgs: ["where"],
  FindUniqueWishlistItemOrThrowArgs: ["where"],
  GroupByWishlistItemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWishlistItemArgs: ["data", "where"],
  UpdateOneWishlistItemArgs: ["data", "where"],
  UpsertOneWishlistItemArgs: ["where", "create", "update"],
  AggregateExpenseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyExpenseArgs: ["data", "skipDuplicates"],
  CreateOneExpenseArgs: ["data"],
  DeleteManyExpenseArgs: ["where"],
  DeleteOneExpenseArgs: ["where"],
  FindFirstExpenseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstExpenseOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExpenseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueExpenseArgs: ["where"],
  FindUniqueExpenseOrThrowArgs: ["where"],
  GroupByExpenseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyExpenseArgs: ["data", "where"],
  UpdateOneExpenseArgs: ["data", "where"],
  UpsertOneExpenseArgs: ["where", "create", "update"],
  AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCategoryArgs: ["data", "skipDuplicates"],
  CreateOneCategoryArgs: ["data"],
  DeleteManyCategoryArgs: ["where"],
  DeleteOneCategoryArgs: ["where"],
  FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCategoryArgs: ["where"],
  FindUniqueCategoryOrThrowArgs: ["where"],
  GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCategoryArgs: ["data", "where"],
  UpdateOneCategoryArgs: ["data", "where"],
  UpsertOneCategoryArgs: ["where", "create", "update"],
  AggregateSalaryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySalaryArgs: ["data", "skipDuplicates"],
  CreateOneSalaryArgs: ["data"],
  DeleteManySalaryArgs: ["where"],
  DeleteOneSalaryArgs: ["where"],
  FindFirstSalaryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSalaryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySalaryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSalaryArgs: ["where"],
  FindUniqueSalaryOrThrowArgs: ["where"],
  GroupBySalaryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySalaryArgs: ["data", "where"],
  UpdateOneSalaryArgs: ["data", "where"],
  UpsertOneSalaryArgs: ["where", "create", "update"]
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
  Saving: relationResolvers.SavingRelationsResolver,
  WishlistItem: relationResolvers.WishlistItemRelationsResolver,
  Expense: relationResolvers.ExpenseRelationsResolver,
  Category: relationResolvers.CategoryRelationsResolver,
  Salary: relationResolvers.SalaryRelationsResolver
};
const relationResolversInfo = {
  User: ["recipe", "savings", "wishlistItems", "expenses", "categories", "salary"],
  Recipe: ["user"],
  Saving: ["user"],
  WishlistItem: ["user"],
  Expense: ["user", "categories"],
  Category: ["user", "expenses"],
  Salary: ["user"]
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
  Recipe: ["id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  Saving: ["id", "userId", "value", "date", "createdAt", "updatedAt"],
  WishlistItem: ["id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  Expense: ["id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  Category: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  Salary: ["id", "userId", "value", "createdAt", "updatedAt"]
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
  AggregateRecipe: ["_count", "_avg", "_sum", "_min", "_max"],
  RecipeGroupBy: ["id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSaving: ["_count", "_avg", "_sum", "_min", "_max"],
  SavingGroupBy: ["id", "userId", "value", "date", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateWishlistItem: ["_count", "_avg", "_sum", "_min", "_max"],
  WishlistItemGroupBy: ["id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateExpense: ["_count", "_avg", "_sum", "_min", "_max"],
  ExpenseGroupBy: ["id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategory: ["_count", "_min", "_max"],
  CategoryGroupBy: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateSalary: ["_count", "_avg", "_sum", "_min", "_max"],
  SalaryGroupBy: ["id", "userId", "value", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["recipe", "savings", "wishlistItems", "expenses", "categories"],
  UserCountAggregate: ["id", "username", "email", "password", "createdAt", "updatedAt", "_all"],
  UserMinAggregate: ["id", "username", "email", "password", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "username", "email", "password", "createdAt", "updatedAt"],
  RecipeCountAggregate: ["id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt", "_all"],
  RecipeAvgAggregate: ["rating", "savedPosition"],
  RecipeSumAggregate: ["rating", "savedPosition"],
  RecipeMinAggregate: ["id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  RecipeMaxAggregate: ["id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  SavingCountAggregate: ["id", "userId", "value", "date", "createdAt", "updatedAt", "_all"],
  SavingAvgAggregate: ["value"],
  SavingSumAggregate: ["value"],
  SavingMinAggregate: ["id", "userId", "value", "date", "createdAt", "updatedAt"],
  SavingMaxAggregate: ["id", "userId", "value", "date", "createdAt", "updatedAt"],
  WishlistItemCountAggregate: ["id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt", "_all"],
  WishlistItemAvgAggregate: ["priceInThousands"],
  WishlistItemSumAggregate: ["priceInThousands"],
  WishlistItemMinAggregate: ["id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  WishlistItemMaxAggregate: ["id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  ExpenseCount: ["categories"],
  ExpenseCountAggregate: ["id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt", "_all"],
  ExpenseAvgAggregate: ["value", "rating", "timesPerMonth"],
  ExpenseSumAggregate: ["value", "rating", "timesPerMonth"],
  ExpenseMinAggregate: ["id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  ExpenseMaxAggregate: ["id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  CategoryCount: ["expenses"],
  CategoryCountAggregate: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt", "_all"],
  CategoryMinAggregate: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryMaxAggregate: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  SalaryCountAggregate: ["id", "userId", "value", "createdAt", "updatedAt", "_all"],
  SalaryAvgAggregate: ["value"],
  SalarySumAggregate: ["value"],
  SalaryMinAggregate: ["id", "userId", "value", "createdAt", "updatedAt"],
  SalaryMaxAggregate: ["id", "userId", "value", "createdAt", "updatedAt"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary"],
  UserOrderByWithRelationInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary"],
  UserWhereUniqueInput: ["id", "username", "email"],
  UserOrderByWithAggregationInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "username", "email", "password", "createdAt", "updatedAt"],
  RecipeWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  RecipeOrderByWithRelationInput: ["id", "userId", "user", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  RecipeWhereUniqueInput: ["id"],
  RecipeOrderByWithAggregationInput: ["id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  RecipeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  SavingWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "value", "date", "createdAt", "updatedAt"],
  SavingOrderByWithRelationInput: ["id", "userId", "user", "value", "date", "createdAt", "updatedAt"],
  SavingWhereUniqueInput: ["id"],
  SavingOrderByWithAggregationInput: ["id", "userId", "value", "date", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  SavingScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "value", "date", "createdAt", "updatedAt"],
  WishlistItemWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  WishlistItemOrderByWithRelationInput: ["id", "userId", "user", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  WishlistItemWhereUniqueInput: ["id"],
  WishlistItemOrderByWithAggregationInput: ["id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  WishlistItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  ExpenseWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "name", "value", "rating", "date", "description", "timesPerMonth", "categories", "createdAt", "updatedAt"],
  ExpenseOrderByWithRelationInput: ["id", "userId", "user", "name", "value", "rating", "date", "description", "timesPerMonth", "categories", "createdAt", "updatedAt"],
  ExpenseWhereUniqueInput: ["id"],
  ExpenseOrderByWithAggregationInput: ["id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  ExpenseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  CategoryWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "expenses", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryOrderByWithRelationInput: ["id", "userId", "user", "expenses", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryWhereUniqueInput: ["id"],
  CategoryOrderByWithAggregationInput: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt", "_count", "_max", "_min"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  SalaryWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "value", "createdAt", "updatedAt"],
  SalaryOrderByWithRelationInput: ["id", "userId", "user", "value", "createdAt", "updatedAt"],
  SalaryWhereUniqueInput: ["id", "userId"],
  SalaryOrderByWithAggregationInput: ["id", "userId", "value", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  SalaryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "value", "createdAt", "updatedAt"],
  UserCreateInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary"],
  UserUpdateInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary"],
  UserCreateManyInput: ["id", "username", "email", "password", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["id", "username", "email", "password", "createdAt", "updatedAt"],
  RecipeCreateInput: ["id", "user", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  RecipeUpdateInput: ["id", "user", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  RecipeCreateManyInput: ["id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  RecipeUpdateManyMutationInput: ["id", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  SavingCreateInput: ["id", "user", "value", "date", "createdAt", "updatedAt"],
  SavingUpdateInput: ["id", "user", "value", "date", "createdAt", "updatedAt"],
  SavingCreateManyInput: ["id", "userId", "value", "date", "createdAt", "updatedAt"],
  SavingUpdateManyMutationInput: ["id", "value", "date", "createdAt", "updatedAt"],
  WishlistItemCreateInput: ["id", "user", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  WishlistItemUpdateInput: ["id", "user", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  WishlistItemCreateManyInput: ["id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  WishlistItemUpdateManyMutationInput: ["id", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  ExpenseCreateInput: ["id", "user", "name", "value", "rating", "date", "description", "timesPerMonth", "categories", "createdAt", "updatedAt"],
  ExpenseUpdateInput: ["id", "user", "name", "value", "rating", "date", "description", "timesPerMonth", "categories", "createdAt", "updatedAt"],
  ExpenseCreateManyInput: ["id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  ExpenseUpdateManyMutationInput: ["id", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  CategoryCreateInput: ["id", "user", "expenses", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryUpdateInput: ["id", "user", "expenses", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryCreateManyInput: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryUpdateManyMutationInput: ["id", "name", "bgColor", "createdAt", "updatedAt"],
  SalaryCreateInput: ["id", "user", "value", "createdAt", "updatedAt"],
  SalaryUpdateInput: ["id", "user", "value", "createdAt", "updatedAt"],
  SalaryCreateManyInput: ["id", "userId", "value", "createdAt", "updatedAt"],
  SalaryUpdateManyMutationInput: ["id", "value", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  RecipeListRelationFilter: ["every", "some", "none"],
  SavingListRelationFilter: ["every", "some", "none"],
  WishlistItemListRelationFilter: ["every", "some", "none"],
  ExpenseListRelationFilter: ["every", "some", "none"],
  CategoryListRelationFilter: ["every", "some", "none"],
  SalaryRelationFilter: ["is", "isNot"],
  RecipeOrderByRelationAggregateInput: ["_count"],
  SavingOrderByRelationAggregateInput: ["_count"],
  WishlistItemOrderByRelationAggregateInput: ["_count"],
  ExpenseOrderByRelationAggregateInput: ["_count"],
  CategoryOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "username", "email", "password", "createdAt", "updatedAt"],
  UserMaxOrderByAggregateInput: ["id", "username", "email", "password", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "username", "email", "password", "createdAt", "updatedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  RecipeCountOrderByAggregateInput: ["id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  RecipeAvgOrderByAggregateInput: ["rating", "savedPosition"],
  RecipeMaxOrderByAggregateInput: ["id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  RecipeMinOrderByAggregateInput: ["id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  RecipeSumOrderByAggregateInput: ["rating", "savedPosition"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SavingCountOrderByAggregateInput: ["id", "userId", "value", "date", "createdAt", "updatedAt"],
  SavingAvgOrderByAggregateInput: ["value"],
  SavingMaxOrderByAggregateInput: ["id", "userId", "value", "date", "createdAt", "updatedAt"],
  SavingMinOrderByAggregateInput: ["id", "userId", "value", "date", "createdAt", "updatedAt"],
  SavingSumOrderByAggregateInput: ["value"],
  DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  WishlistItemCountOrderByAggregateInput: ["id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  WishlistItemAvgOrderByAggregateInput: ["priceInThousands"],
  WishlistItemMaxOrderByAggregateInput: ["id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  WishlistItemMinOrderByAggregateInput: ["id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  WishlistItemSumOrderByAggregateInput: ["priceInThousands"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DecimalNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ExpenseCountOrderByAggregateInput: ["id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  ExpenseAvgOrderByAggregateInput: ["value", "rating", "timesPerMonth"],
  ExpenseMaxOrderByAggregateInput: ["id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  ExpenseMinOrderByAggregateInput: ["id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  ExpenseSumOrderByAggregateInput: ["value", "rating", "timesPerMonth"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DecimalNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  CategoryCountOrderByAggregateInput: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryMaxOrderByAggregateInput: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryMinOrderByAggregateInput: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SalaryCountOrderByAggregateInput: ["id", "userId", "value", "createdAt", "updatedAt"],
  SalaryAvgOrderByAggregateInput: ["value"],
  SalaryMaxOrderByAggregateInput: ["id", "userId", "value", "createdAt", "updatedAt"],
  SalaryMinOrderByAggregateInput: ["id", "userId", "value", "createdAt", "updatedAt"],
  SalarySumOrderByAggregateInput: ["value"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  RecipeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SavingCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  WishlistItemCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ExpenseCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  CategoryCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SalaryCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  RecipeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SavingUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WishlistItemUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ExpenseUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CategoryUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SalaryUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutRecipeInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutRecipeNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutSavingsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutSavingsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutWishlistItemsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutWishlistItemsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutExpensesInput: ["create", "connectOrCreate", "connect"],
  CategoryCreateNestedManyWithoutExpensesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutExpensesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableDecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CategoryUpdateManyWithoutExpensesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCategoriesInput: ["create", "connectOrCreate", "connect"],
  ExpenseCreateNestedManyWithoutCategoriesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCategoriesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ExpenseUpdateManyWithoutCategoriesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutSalaryInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutSalaryNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDecimalNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDecimalNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  RecipeCreateWithoutUserInput: ["id", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  RecipeCreateOrConnectWithoutUserInput: ["where", "create"],
  RecipeCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SavingCreateWithoutUserInput: ["id", "value", "date", "createdAt", "updatedAt"],
  SavingCreateOrConnectWithoutUserInput: ["where", "create"],
  SavingCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  WishlistItemCreateWithoutUserInput: ["id", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  WishlistItemCreateOrConnectWithoutUserInput: ["where", "create"],
  WishlistItemCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ExpenseCreateWithoutUserInput: ["id", "name", "value", "rating", "date", "description", "timesPerMonth", "categories", "createdAt", "updatedAt"],
  ExpenseCreateOrConnectWithoutUserInput: ["where", "create"],
  ExpenseCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  CategoryCreateWithoutUserInput: ["id", "expenses", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryCreateOrConnectWithoutUserInput: ["where", "create"],
  CategoryCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SalaryCreateWithoutUserInput: ["id", "value", "createdAt", "updatedAt"],
  SalaryCreateOrConnectWithoutUserInput: ["where", "create"],
  RecipeUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  RecipeUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  RecipeUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  RecipeScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  SavingUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SavingUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SavingUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SavingScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "value", "date", "createdAt", "updatedAt"],
  WishlistItemUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  WishlistItemUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  WishlistItemUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  WishlistItemScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  ExpenseUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ExpenseUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ExpenseUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ExpenseScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  CategoryUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CategoryUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CategoryUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  CategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  SalaryUpsertWithoutUserInput: ["update", "create"],
  SalaryUpdateWithoutUserInput: ["id", "value", "createdAt", "updatedAt"],
  UserCreateWithoutRecipeInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "savings", "wishlistItems", "expenses", "categories", "salary"],
  UserCreateOrConnectWithoutRecipeInput: ["where", "create"],
  UserUpsertWithoutRecipeInput: ["update", "create"],
  UserUpdateWithoutRecipeInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "savings", "wishlistItems", "expenses", "categories", "salary"],
  UserCreateWithoutSavingsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "wishlistItems", "expenses", "categories", "salary"],
  UserCreateOrConnectWithoutSavingsInput: ["where", "create"],
  UserUpsertWithoutSavingsInput: ["update", "create"],
  UserUpdateWithoutSavingsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "wishlistItems", "expenses", "categories", "salary"],
  UserCreateWithoutWishlistItemsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "expenses", "categories", "salary"],
  UserCreateOrConnectWithoutWishlistItemsInput: ["where", "create"],
  UserUpsertWithoutWishlistItemsInput: ["update", "create"],
  UserUpdateWithoutWishlistItemsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "expenses", "categories", "salary"],
  UserCreateWithoutExpensesInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "categories", "salary"],
  UserCreateOrConnectWithoutExpensesInput: ["where", "create"],
  CategoryCreateWithoutExpensesInput: ["id", "user", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryCreateOrConnectWithoutExpensesInput: ["where", "create"],
  UserUpsertWithoutExpensesInput: ["update", "create"],
  UserUpdateWithoutExpensesInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "categories", "salary"],
  CategoryUpsertWithWhereUniqueWithoutExpensesInput: ["where", "update", "create"],
  CategoryUpdateWithWhereUniqueWithoutExpensesInput: ["where", "data"],
  CategoryUpdateManyWithWhereWithoutExpensesInput: ["where", "data"],
  UserCreateWithoutCategoriesInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "salary"],
  UserCreateOrConnectWithoutCategoriesInput: ["where", "create"],
  ExpenseCreateWithoutCategoriesInput: ["id", "user", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  ExpenseCreateOrConnectWithoutCategoriesInput: ["where", "create"],
  UserUpsertWithoutCategoriesInput: ["update", "create"],
  UserUpdateWithoutCategoriesInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "salary"],
  ExpenseUpsertWithWhereUniqueWithoutCategoriesInput: ["where", "update", "create"],
  ExpenseUpdateWithWhereUniqueWithoutCategoriesInput: ["where", "data"],
  ExpenseUpdateManyWithWhereWithoutCategoriesInput: ["where", "data"],
  UserCreateWithoutSalaryInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories"],
  UserCreateOrConnectWithoutSalaryInput: ["where", "create"],
  UserUpsertWithoutSalaryInput: ["update", "create"],
  UserUpdateWithoutSalaryInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories"],
  RecipeCreateManyUserInput: ["id", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  SavingCreateManyUserInput: ["id", "value", "date", "createdAt", "updatedAt"],
  WishlistItemCreateManyUserInput: ["id", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  ExpenseCreateManyUserInput: ["id", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  CategoryCreateManyUserInput: ["id", "name", "bgColor", "createdAt", "updatedAt"],
  RecipeUpdateWithoutUserInput: ["id", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  SavingUpdateWithoutUserInput: ["id", "value", "date", "createdAt", "updatedAt"],
  WishlistItemUpdateWithoutUserInput: ["id", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  ExpenseUpdateWithoutUserInput: ["id", "name", "value", "rating", "date", "description", "timesPerMonth", "categories", "createdAt", "updatedAt"],
  CategoryUpdateWithoutUserInput: ["id", "expenses", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryUpdateWithoutExpensesInput: ["id", "user", "name", "bgColor", "createdAt", "updatedAt"],
  ExpenseUpdateWithoutCategoriesInput: ["id", "user", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"]
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

