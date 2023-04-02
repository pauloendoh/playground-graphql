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
  Salary: crudResolvers.SalaryCrudResolver,
  Issue: crudResolvers.IssueCrudResolver,
  IssueLabel: crudResolvers.IssueLabelCrudResolver,
  RawColor: crudResolvers.RawColorCrudResolver,
  MixedColor: crudResolvers.MixedColorCrudResolver,
  ColorProportion: crudResolvers.ColorProportionCrudResolver
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
  },
  Issue: {
    aggregateIssue: actionResolvers.AggregateIssueResolver,
    createManyIssue: actionResolvers.CreateManyIssueResolver,
    createOneIssue: actionResolvers.CreateOneIssueResolver,
    deleteManyIssue: actionResolvers.DeleteManyIssueResolver,
    deleteOneIssue: actionResolvers.DeleteOneIssueResolver,
    findFirstIssue: actionResolvers.FindFirstIssueResolver,
    findFirstIssueOrThrow: actionResolvers.FindFirstIssueOrThrowResolver,
    issues: actionResolvers.FindManyIssueResolver,
    issue: actionResolvers.FindUniqueIssueResolver,
    getIssue: actionResolvers.FindUniqueIssueOrThrowResolver,
    groupByIssue: actionResolvers.GroupByIssueResolver,
    updateManyIssue: actionResolvers.UpdateManyIssueResolver,
    updateOneIssue: actionResolvers.UpdateOneIssueResolver,
    upsertOneIssue: actionResolvers.UpsertOneIssueResolver
  },
  IssueLabel: {
    aggregateIssueLabel: actionResolvers.AggregateIssueLabelResolver,
    createManyIssueLabel: actionResolvers.CreateManyIssueLabelResolver,
    createOneIssueLabel: actionResolvers.CreateOneIssueLabelResolver,
    deleteManyIssueLabel: actionResolvers.DeleteManyIssueLabelResolver,
    deleteOneIssueLabel: actionResolvers.DeleteOneIssueLabelResolver,
    findFirstIssueLabel: actionResolvers.FindFirstIssueLabelResolver,
    findFirstIssueLabelOrThrow: actionResolvers.FindFirstIssueLabelOrThrowResolver,
    issueLabels: actionResolvers.FindManyIssueLabelResolver,
    issueLabel: actionResolvers.FindUniqueIssueLabelResolver,
    getIssueLabel: actionResolvers.FindUniqueIssueLabelOrThrowResolver,
    groupByIssueLabel: actionResolvers.GroupByIssueLabelResolver,
    updateManyIssueLabel: actionResolvers.UpdateManyIssueLabelResolver,
    updateOneIssueLabel: actionResolvers.UpdateOneIssueLabelResolver,
    upsertOneIssueLabel: actionResolvers.UpsertOneIssueLabelResolver
  },
  RawColor: {
    aggregateRawColor: actionResolvers.AggregateRawColorResolver,
    createManyRawColor: actionResolvers.CreateManyRawColorResolver,
    createOneRawColor: actionResolvers.CreateOneRawColorResolver,
    deleteManyRawColor: actionResolvers.DeleteManyRawColorResolver,
    deleteOneRawColor: actionResolvers.DeleteOneRawColorResolver,
    findFirstRawColor: actionResolvers.FindFirstRawColorResolver,
    findFirstRawColorOrThrow: actionResolvers.FindFirstRawColorOrThrowResolver,
    rawColors: actionResolvers.FindManyRawColorResolver,
    rawColor: actionResolvers.FindUniqueRawColorResolver,
    getRawColor: actionResolvers.FindUniqueRawColorOrThrowResolver,
    groupByRawColor: actionResolvers.GroupByRawColorResolver,
    updateManyRawColor: actionResolvers.UpdateManyRawColorResolver,
    updateOneRawColor: actionResolvers.UpdateOneRawColorResolver,
    upsertOneRawColor: actionResolvers.UpsertOneRawColorResolver
  },
  MixedColor: {
    aggregateMixedColor: actionResolvers.AggregateMixedColorResolver,
    createManyMixedColor: actionResolvers.CreateManyMixedColorResolver,
    createOneMixedColor: actionResolvers.CreateOneMixedColorResolver,
    deleteManyMixedColor: actionResolvers.DeleteManyMixedColorResolver,
    deleteOneMixedColor: actionResolvers.DeleteOneMixedColorResolver,
    findFirstMixedColor: actionResolvers.FindFirstMixedColorResolver,
    findFirstMixedColorOrThrow: actionResolvers.FindFirstMixedColorOrThrowResolver,
    mixedColors: actionResolvers.FindManyMixedColorResolver,
    mixedColor: actionResolvers.FindUniqueMixedColorResolver,
    getMixedColor: actionResolvers.FindUniqueMixedColorOrThrowResolver,
    groupByMixedColor: actionResolvers.GroupByMixedColorResolver,
    updateManyMixedColor: actionResolvers.UpdateManyMixedColorResolver,
    updateOneMixedColor: actionResolvers.UpdateOneMixedColorResolver,
    upsertOneMixedColor: actionResolvers.UpsertOneMixedColorResolver
  },
  ColorProportion: {
    aggregateColorProportion: actionResolvers.AggregateColorProportionResolver,
    createManyColorProportion: actionResolvers.CreateManyColorProportionResolver,
    createOneColorProportion: actionResolvers.CreateOneColorProportionResolver,
    deleteManyColorProportion: actionResolvers.DeleteManyColorProportionResolver,
    deleteOneColorProportion: actionResolvers.DeleteOneColorProportionResolver,
    findFirstColorProportion: actionResolvers.FindFirstColorProportionResolver,
    findFirstColorProportionOrThrow: actionResolvers.FindFirstColorProportionOrThrowResolver,
    colorProportions: actionResolvers.FindManyColorProportionResolver,
    colorProportion: actionResolvers.FindUniqueColorProportionResolver,
    getColorProportion: actionResolvers.FindUniqueColorProportionOrThrowResolver,
    groupByColorProportion: actionResolvers.GroupByColorProportionResolver,
    updateManyColorProportion: actionResolvers.UpdateManyColorProportionResolver,
    updateOneColorProportion: actionResolvers.UpdateOneColorProportionResolver,
    upsertOneColorProportion: actionResolvers.UpsertOneColorProportionResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Recipe: ["aggregateRecipe", "createManyRecipe", "createOneRecipe", "deleteManyRecipe", "deleteOneRecipe", "findFirstRecipe", "findFirstRecipeOrThrow", "recipes", "recipe", "getRecipe", "groupByRecipe", "updateManyRecipe", "updateOneRecipe", "upsertOneRecipe"],
  Saving: ["aggregateSaving", "createManySaving", "createOneSaving", "deleteManySaving", "deleteOneSaving", "findFirstSaving", "findFirstSavingOrThrow", "savings", "saving", "getSaving", "groupBySaving", "updateManySaving", "updateOneSaving", "upsertOneSaving"],
  WishlistItem: ["aggregateWishlistItem", "createManyWishlistItem", "createOneWishlistItem", "deleteManyWishlistItem", "deleteOneWishlistItem", "findFirstWishlistItem", "findFirstWishlistItemOrThrow", "wishlistItems", "wishlistItem", "getWishlistItem", "groupByWishlistItem", "updateManyWishlistItem", "updateOneWishlistItem", "upsertOneWishlistItem"],
  Expense: ["aggregateExpense", "createManyExpense", "createOneExpense", "deleteManyExpense", "deleteOneExpense", "findFirstExpense", "findFirstExpenseOrThrow", "expenses", "expense", "getExpense", "groupByExpense", "updateManyExpense", "updateOneExpense", "upsertOneExpense"],
  Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
  Salary: ["aggregateSalary", "createManySalary", "createOneSalary", "deleteManySalary", "deleteOneSalary", "findFirstSalary", "findFirstSalaryOrThrow", "salaries", "salary", "getSalary", "groupBySalary", "updateManySalary", "updateOneSalary", "upsertOneSalary"],
  Issue: ["aggregateIssue", "createManyIssue", "createOneIssue", "deleteManyIssue", "deleteOneIssue", "findFirstIssue", "findFirstIssueOrThrow", "issues", "issue", "getIssue", "groupByIssue", "updateManyIssue", "updateOneIssue", "upsertOneIssue"],
  IssueLabel: ["aggregateIssueLabel", "createManyIssueLabel", "createOneIssueLabel", "deleteManyIssueLabel", "deleteOneIssueLabel", "findFirstIssueLabel", "findFirstIssueLabelOrThrow", "issueLabels", "issueLabel", "getIssueLabel", "groupByIssueLabel", "updateManyIssueLabel", "updateOneIssueLabel", "upsertOneIssueLabel"],
  RawColor: ["aggregateRawColor", "createManyRawColor", "createOneRawColor", "deleteManyRawColor", "deleteOneRawColor", "findFirstRawColor", "findFirstRawColorOrThrow", "rawColors", "rawColor", "getRawColor", "groupByRawColor", "updateManyRawColor", "updateOneRawColor", "upsertOneRawColor"],
  MixedColor: ["aggregateMixedColor", "createManyMixedColor", "createOneMixedColor", "deleteManyMixedColor", "deleteOneMixedColor", "findFirstMixedColor", "findFirstMixedColorOrThrow", "mixedColors", "mixedColor", "getMixedColor", "groupByMixedColor", "updateManyMixedColor", "updateOneMixedColor", "upsertOneMixedColor"],
  ColorProportion: ["aggregateColorProportion", "createManyColorProportion", "createOneColorProportion", "deleteManyColorProportion", "deleteOneColorProportion", "findFirstColorProportion", "findFirstColorProportionOrThrow", "colorProportions", "colorProportion", "getColorProportion", "groupByColorProportion", "updateManyColorProportion", "updateOneColorProportion", "upsertOneColorProportion"]
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
  UpsertOneSalaryArgs: ["where", "create", "update"],
  AggregateIssueArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyIssueArgs: ["data", "skipDuplicates"],
  CreateOneIssueArgs: ["data"],
  DeleteManyIssueArgs: ["where"],
  DeleteOneIssueArgs: ["where"],
  FindFirstIssueArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstIssueOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIssueArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueIssueArgs: ["where"],
  FindUniqueIssueOrThrowArgs: ["where"],
  GroupByIssueArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyIssueArgs: ["data", "where"],
  UpdateOneIssueArgs: ["data", "where"],
  UpsertOneIssueArgs: ["where", "create", "update"],
  AggregateIssueLabelArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyIssueLabelArgs: ["data", "skipDuplicates"],
  CreateOneIssueLabelArgs: ["data"],
  DeleteManyIssueLabelArgs: ["where"],
  DeleteOneIssueLabelArgs: ["where"],
  FindFirstIssueLabelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstIssueLabelOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIssueLabelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueIssueLabelArgs: ["where"],
  FindUniqueIssueLabelOrThrowArgs: ["where"],
  GroupByIssueLabelArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyIssueLabelArgs: ["data", "where"],
  UpdateOneIssueLabelArgs: ["data", "where"],
  UpsertOneIssueLabelArgs: ["where", "create", "update"],
  AggregateRawColorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRawColorArgs: ["data", "skipDuplicates"],
  CreateOneRawColorArgs: ["data"],
  DeleteManyRawColorArgs: ["where"],
  DeleteOneRawColorArgs: ["where"],
  FindFirstRawColorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstRawColorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRawColorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRawColorArgs: ["where"],
  FindUniqueRawColorOrThrowArgs: ["where"],
  GroupByRawColorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRawColorArgs: ["data", "where"],
  UpdateOneRawColorArgs: ["data", "where"],
  UpsertOneRawColorArgs: ["where", "create", "update"],
  AggregateMixedColorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMixedColorArgs: ["data", "skipDuplicates"],
  CreateOneMixedColorArgs: ["data"],
  DeleteManyMixedColorArgs: ["where"],
  DeleteOneMixedColorArgs: ["where"],
  FindFirstMixedColorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMixedColorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMixedColorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMixedColorArgs: ["where"],
  FindUniqueMixedColorOrThrowArgs: ["where"],
  GroupByMixedColorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMixedColorArgs: ["data", "where"],
  UpdateOneMixedColorArgs: ["data", "where"],
  UpsertOneMixedColorArgs: ["where", "create", "update"],
  AggregateColorProportionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyColorProportionArgs: ["data", "skipDuplicates"],
  CreateOneColorProportionArgs: ["data"],
  DeleteManyColorProportionArgs: ["where"],
  DeleteOneColorProportionArgs: ["where"],
  FindFirstColorProportionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstColorProportionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyColorProportionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueColorProportionArgs: ["where"],
  FindUniqueColorProportionOrThrowArgs: ["where"],
  GroupByColorProportionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyColorProportionArgs: ["data", "where"],
  UpdateOneColorProportionArgs: ["data", "where"],
  UpsertOneColorProportionArgs: ["where", "create", "update"]
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
  Salary: relationResolvers.SalaryRelationsResolver,
  Issue: relationResolvers.IssueRelationsResolver,
  IssueLabel: relationResolvers.IssueLabelRelationsResolver,
  RawColor: relationResolvers.RawColorRelationsResolver,
  MixedColor: relationResolvers.MixedColorRelationsResolver,
  ColorProportion: relationResolvers.ColorProportionRelationsResolver
};
const relationResolversInfo = {
  User: ["recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  Recipe: ["user"],
  Saving: ["user"],
  WishlistItem: ["user"],
  Expense: ["user", "categories"],
  Category: ["user", "expenses"],
  Salary: ["user"],
  Issue: ["user", "labels"],
  IssueLabel: ["user", "issues"],
  RawColor: ["user", "colorProportions"],
  MixedColor: ["user", "colorProportions"],
  ColorProportion: ["user", "mixedColor", "rawColor"]
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
  Salary: ["id", "userId", "value", "createdAt", "updatedAt"],
  Issue: ["id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueLabel: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  RawColor: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  MixedColor: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  ColorProportion: ["id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt"]
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
  AggregateIssue: ["_count", "_avg", "_sum", "_min", "_max"],
  IssueGroupBy: ["id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateIssueLabel: ["_count", "_min", "_max"],
  IssueLabelGroupBy: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateRawColor: ["_count", "_min", "_max"],
  RawColorGroupBy: ["id", "userId", "name", "color", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateMixedColor: ["_count", "_min", "_max"],
  MixedColorGroupBy: ["id", "userId", "name", "color", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateColorProportion: ["_count", "_avg", "_sum", "_min", "_max"],
  ColorProportionGroupBy: ["id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["recipe", "savings", "wishlistItems", "expenses", "categories", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
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
  SalaryMaxAggregate: ["id", "userId", "value", "createdAt", "updatedAt"],
  IssueCount: ["labels"],
  IssueCountAggregate: ["id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt", "_all"],
  IssueAvgAggregate: ["position", "solvedPosition", "frequency", "intensity"],
  IssueSumAggregate: ["position", "solvedPosition", "frequency", "intensity"],
  IssueMinAggregate: ["id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueMaxAggregate: ["id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueLabelCount: ["issues"],
  IssueLabelCountAggregate: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt", "_all"],
  IssueLabelMinAggregate: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  IssueLabelMaxAggregate: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  RawColorCount: ["colorProportions"],
  RawColorCountAggregate: ["id", "userId", "name", "color", "createdAt", "updatedAt", "_all"],
  RawColorMinAggregate: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  RawColorMaxAggregate: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  MixedColorCount: ["colorProportions"],
  MixedColorCountAggregate: ["id", "userId", "name", "color", "createdAt", "updatedAt", "_all"],
  MixedColorMinAggregate: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  MixedColorMaxAggregate: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  ColorProportionCountAggregate: ["id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt", "_all"],
  ColorProportionAvgAggregate: ["proportion"],
  ColorProportionSumAggregate: ["proportion"],
  ColorProportionMinAggregate: ["id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt"],
  ColorProportionMaxAggregate: ["id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserOrderByWithRelationInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
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
  IssueWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt", "labels"],
  IssueOrderByWithRelationInput: ["id", "userId", "user", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt", "labels"],
  IssueWhereUniqueInput: ["id"],
  IssueOrderByWithAggregationInput: ["id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  IssueScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueLabelWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "issues", "name", "bgColor", "createdAt", "updatedAt"],
  IssueLabelOrderByWithRelationInput: ["id", "userId", "user", "issues", "name", "bgColor", "createdAt", "updatedAt"],
  IssueLabelWhereUniqueInput: ["id"],
  IssueLabelOrderByWithAggregationInput: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt", "_count", "_max", "_min"],
  IssueLabelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  RawColorWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "name", "color", "createdAt", "updatedAt", "colorProportions"],
  RawColorOrderByWithRelationInput: ["id", "userId", "user", "name", "color", "createdAt", "updatedAt", "colorProportions"],
  RawColorWhereUniqueInput: ["id"],
  RawColorOrderByWithAggregationInput: ["id", "userId", "name", "color", "createdAt", "updatedAt", "_count", "_max", "_min"],
  RawColorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "color", "createdAt", "updatedAt"],
  MixedColorWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "name", "color", "colorProportions", "createdAt", "updatedAt"],
  MixedColorOrderByWithRelationInput: ["id", "userId", "user", "name", "color", "colorProportions", "createdAt", "updatedAt"],
  MixedColorWhereUniqueInput: ["id"],
  MixedColorOrderByWithAggregationInput: ["id", "userId", "name", "color", "createdAt", "updatedAt", "_count", "_max", "_min"],
  MixedColorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "color", "createdAt", "updatedAt"],
  ColorProportionWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "mixedColor", "mixedColorId", "rawColor", "rawColorId", "proportion", "createdAt", "updatedAt"],
  ColorProportionOrderByWithRelationInput: ["id", "userId", "user", "mixedColor", "mixedColorId", "rawColor", "rawColorId", "proportion", "createdAt", "updatedAt"],
  ColorProportionWhereUniqueInput: ["id"],
  ColorProportionOrderByWithAggregationInput: ["id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  ColorProportionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt"],
  UserCreateInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserUpdateInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
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
  IssueCreateInput: ["id", "user", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt", "labels"],
  IssueUpdateInput: ["id", "user", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt", "labels"],
  IssueCreateManyInput: ["id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueUpdateManyMutationInput: ["id", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueLabelCreateInput: ["id", "user", "issues", "name", "bgColor", "createdAt", "updatedAt"],
  IssueLabelUpdateInput: ["id", "user", "issues", "name", "bgColor", "createdAt", "updatedAt"],
  IssueLabelCreateManyInput: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  IssueLabelUpdateManyMutationInput: ["id", "name", "bgColor", "createdAt", "updatedAt"],
  RawColorCreateInput: ["id", "user", "name", "color", "createdAt", "updatedAt", "colorProportions"],
  RawColorUpdateInput: ["id", "user", "name", "color", "createdAt", "updatedAt", "colorProportions"],
  RawColorCreateManyInput: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  RawColorUpdateManyMutationInput: ["id", "name", "color", "createdAt", "updatedAt"],
  MixedColorCreateInput: ["id", "user", "name", "color", "colorProportions", "createdAt", "updatedAt"],
  MixedColorUpdateInput: ["id", "user", "name", "color", "colorProportions", "createdAt", "updatedAt"],
  MixedColorCreateManyInput: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  MixedColorUpdateManyMutationInput: ["id", "name", "color", "createdAt", "updatedAt"],
  ColorProportionCreateInput: ["id", "user", "mixedColor", "rawColor", "proportion", "createdAt", "updatedAt"],
  ColorProportionUpdateInput: ["id", "user", "mixedColor", "rawColor", "proportion", "createdAt", "updatedAt"],
  ColorProportionCreateManyInput: ["id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt"],
  ColorProportionUpdateManyMutationInput: ["id", "proportion", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  RecipeListRelationFilter: ["every", "some", "none"],
  SavingListRelationFilter: ["every", "some", "none"],
  WishlistItemListRelationFilter: ["every", "some", "none"],
  ExpenseListRelationFilter: ["every", "some", "none"],
  CategoryListRelationFilter: ["every", "some", "none"],
  SalaryRelationFilter: ["is", "isNot"],
  IssueListRelationFilter: ["every", "some", "none"],
  IssueLabelListRelationFilter: ["every", "some", "none"],
  RawColorListRelationFilter: ["every", "some", "none"],
  MixedColorListRelationFilter: ["every", "some", "none"],
  ColorProportionListRelationFilter: ["every", "some", "none"],
  RecipeOrderByRelationAggregateInput: ["_count"],
  SavingOrderByRelationAggregateInput: ["_count"],
  WishlistItemOrderByRelationAggregateInput: ["_count"],
  ExpenseOrderByRelationAggregateInput: ["_count"],
  CategoryOrderByRelationAggregateInput: ["_count"],
  IssueOrderByRelationAggregateInput: ["_count"],
  IssueLabelOrderByRelationAggregateInput: ["_count"],
  RawColorOrderByRelationAggregateInput: ["_count"],
  MixedColorOrderByRelationAggregateInput: ["_count"],
  ColorProportionOrderByRelationAggregateInput: ["_count"],
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
  BoolFilter: ["equals", "not"],
  IssueCountOrderByAggregateInput: ["id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueAvgOrderByAggregateInput: ["position", "solvedPosition", "frequency", "intensity"],
  IssueMaxOrderByAggregateInput: ["id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueMinOrderByAggregateInput: ["id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueSumOrderByAggregateInput: ["position", "solvedPosition", "frequency", "intensity"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IssueLabelCountOrderByAggregateInput: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  IssueLabelMaxOrderByAggregateInput: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  IssueLabelMinOrderByAggregateInput: ["id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  RawColorCountOrderByAggregateInput: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  RawColorMaxOrderByAggregateInput: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  RawColorMinOrderByAggregateInput: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  MixedColorCountOrderByAggregateInput: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  MixedColorMaxOrderByAggregateInput: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  MixedColorMinOrderByAggregateInput: ["id", "userId", "name", "color", "createdAt", "updatedAt"],
  MixedColorRelationFilter: ["is", "isNot"],
  RawColorRelationFilter: ["is", "isNot"],
  ColorProportionCountOrderByAggregateInput: ["id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt"],
  ColorProportionAvgOrderByAggregateInput: ["proportion"],
  ColorProportionMaxOrderByAggregateInput: ["id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt"],
  ColorProportionMinOrderByAggregateInput: ["id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt"],
  ColorProportionSumOrderByAggregateInput: ["proportion"],
  RecipeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SavingCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  WishlistItemCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ExpenseCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  CategoryCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SalaryCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  IssueCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  IssueLabelCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  RawColorCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  MixedColorCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ColorProportionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  RecipeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SavingUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WishlistItemUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ExpenseUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CategoryUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SalaryUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  IssueUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IssueLabelUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RawColorUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MixedColorUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ColorProportionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
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
  UserCreateNestedOneWithoutIssuesInput: ["create", "connectOrCreate", "connect"],
  IssueLabelCreateNestedManyWithoutIssuesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutIssuesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BoolFieldUpdateOperationsInput: ["set"],
  IssueLabelUpdateManyWithoutIssuesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutIssueLabelsInput: ["create", "connectOrCreate", "connect"],
  IssueCreateNestedManyWithoutLabelsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutIssueLabelsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IssueUpdateManyWithoutLabelsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutRawColorsInput: ["create", "connectOrCreate", "connect"],
  ColorProportionCreateNestedManyWithoutRawColorInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutRawColorsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ColorProportionUpdateManyWithoutRawColorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutMixedColorsInput: ["create", "connectOrCreate", "connect"],
  ColorProportionCreateNestedManyWithoutMixedColorInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutMixedColorsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ColorProportionUpdateManyWithoutMixedColorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutColorProportionsInput: ["create", "connectOrCreate", "connect"],
  MixedColorCreateNestedOneWithoutColorProportionsInput: ["create", "connectOrCreate", "connect"],
  RawColorCreateNestedOneWithoutColorProportionsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutColorProportionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  RawColorUpdateOneRequiredWithoutColorProportionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
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
  IssueCreateWithoutUserInput: ["id", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt", "labels"],
  IssueCreateOrConnectWithoutUserInput: ["where", "create"],
  IssueCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  IssueLabelCreateWithoutUserInput: ["id", "issues", "name", "bgColor", "createdAt", "updatedAt"],
  IssueLabelCreateOrConnectWithoutUserInput: ["where", "create"],
  IssueLabelCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  RawColorCreateWithoutUserInput: ["id", "name", "color", "createdAt", "updatedAt", "colorProportions"],
  RawColorCreateOrConnectWithoutUserInput: ["where", "create"],
  RawColorCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  MixedColorCreateWithoutUserInput: ["id", "name", "color", "colorProportions", "createdAt", "updatedAt"],
  MixedColorCreateOrConnectWithoutUserInput: ["where", "create"],
  MixedColorCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ColorProportionCreateWithoutUserInput: ["id", "mixedColor", "rawColor", "proportion", "createdAt", "updatedAt"],
  ColorProportionCreateOrConnectWithoutUserInput: ["where", "create"],
  ColorProportionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
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
  IssueUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  IssueUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  IssueUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  IssueScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueLabelUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  IssueLabelUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  IssueLabelUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  IssueLabelScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "bgColor", "createdAt", "updatedAt"],
  RawColorUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  RawColorUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  RawColorUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  RawColorScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "color", "createdAt", "updatedAt"],
  MixedColorUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  MixedColorUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  MixedColorUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  MixedColorScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "color", "createdAt", "updatedAt"],
  ColorProportionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ColorProportionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ColorProportionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ColorProportionScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt"],
  UserCreateWithoutRecipeInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateOrConnectWithoutRecipeInput: ["where", "create"],
  UserUpsertWithoutRecipeInput: ["update", "create"],
  UserUpdateWithoutRecipeInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateWithoutSavingsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateOrConnectWithoutSavingsInput: ["where", "create"],
  UserUpsertWithoutSavingsInput: ["update", "create"],
  UserUpdateWithoutSavingsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateWithoutWishlistItemsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateOrConnectWithoutWishlistItemsInput: ["where", "create"],
  UserUpsertWithoutWishlistItemsInput: ["update", "create"],
  UserUpdateWithoutWishlistItemsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateWithoutExpensesInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateOrConnectWithoutExpensesInput: ["where", "create"],
  CategoryCreateWithoutExpensesInput: ["id", "user", "name", "bgColor", "createdAt", "updatedAt"],
  CategoryCreateOrConnectWithoutExpensesInput: ["where", "create"],
  UserUpsertWithoutExpensesInput: ["update", "create"],
  UserUpdateWithoutExpensesInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  CategoryUpsertWithWhereUniqueWithoutExpensesInput: ["where", "update", "create"],
  CategoryUpdateWithWhereUniqueWithoutExpensesInput: ["where", "data"],
  CategoryUpdateManyWithWhereWithoutExpensesInput: ["where", "data"],
  UserCreateWithoutCategoriesInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateOrConnectWithoutCategoriesInput: ["where", "create"],
  ExpenseCreateWithoutCategoriesInput: ["id", "user", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  ExpenseCreateOrConnectWithoutCategoriesInput: ["where", "create"],
  UserUpsertWithoutCategoriesInput: ["update", "create"],
  UserUpdateWithoutCategoriesInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "salary", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  ExpenseUpsertWithWhereUniqueWithoutCategoriesInput: ["where", "update", "create"],
  ExpenseUpdateWithWhereUniqueWithoutCategoriesInput: ["where", "data"],
  ExpenseUpdateManyWithWhereWithoutCategoriesInput: ["where", "data"],
  UserCreateWithoutSalaryInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateOrConnectWithoutSalaryInput: ["where", "create"],
  UserUpsertWithoutSalaryInput: ["update", "create"],
  UserUpdateWithoutSalaryInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "issues", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateWithoutIssuesInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  UserCreateOrConnectWithoutIssuesInput: ["where", "create"],
  IssueLabelCreateWithoutIssuesInput: ["id", "user", "name", "bgColor", "createdAt", "updatedAt"],
  IssueLabelCreateOrConnectWithoutIssuesInput: ["where", "create"],
  UserUpsertWithoutIssuesInput: ["update", "create"],
  UserUpdateWithoutIssuesInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issueLabels", "rawColors", "mixedColors", "colorProportions"],
  IssueLabelUpsertWithWhereUniqueWithoutIssuesInput: ["where", "update", "create"],
  IssueLabelUpdateWithWhereUniqueWithoutIssuesInput: ["where", "data"],
  IssueLabelUpdateManyWithWhereWithoutIssuesInput: ["where", "data"],
  UserCreateWithoutIssueLabelsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "rawColors", "mixedColors", "colorProportions"],
  UserCreateOrConnectWithoutIssueLabelsInput: ["where", "create"],
  IssueCreateWithoutLabelsInput: ["id", "user", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueCreateOrConnectWithoutLabelsInput: ["where", "create"],
  UserUpsertWithoutIssueLabelsInput: ["update", "create"],
  UserUpdateWithoutIssueLabelsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "rawColors", "mixedColors", "colorProportions"],
  IssueUpsertWithWhereUniqueWithoutLabelsInput: ["where", "update", "create"],
  IssueUpdateWithWhereUniqueWithoutLabelsInput: ["where", "data"],
  IssueUpdateManyWithWhereWithoutLabelsInput: ["where", "data"],
  UserCreateWithoutRawColorsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "mixedColors", "colorProportions"],
  UserCreateOrConnectWithoutRawColorsInput: ["where", "create"],
  ColorProportionCreateWithoutRawColorInput: ["id", "user", "mixedColor", "proportion", "createdAt", "updatedAt"],
  ColorProportionCreateOrConnectWithoutRawColorInput: ["where", "create"],
  ColorProportionCreateManyRawColorInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutRawColorsInput: ["update", "create"],
  UserUpdateWithoutRawColorsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "mixedColors", "colorProportions"],
  ColorProportionUpsertWithWhereUniqueWithoutRawColorInput: ["where", "update", "create"],
  ColorProportionUpdateWithWhereUniqueWithoutRawColorInput: ["where", "data"],
  ColorProportionUpdateManyWithWhereWithoutRawColorInput: ["where", "data"],
  UserCreateWithoutMixedColorsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "colorProportions"],
  UserCreateOrConnectWithoutMixedColorsInput: ["where", "create"],
  ColorProportionCreateWithoutMixedColorInput: ["id", "user", "rawColor", "proportion", "createdAt", "updatedAt"],
  ColorProportionCreateOrConnectWithoutMixedColorInput: ["where", "create"],
  ColorProportionCreateManyMixedColorInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutMixedColorsInput: ["update", "create"],
  UserUpdateWithoutMixedColorsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "colorProportions"],
  ColorProportionUpsertWithWhereUniqueWithoutMixedColorInput: ["where", "update", "create"],
  ColorProportionUpdateWithWhereUniqueWithoutMixedColorInput: ["where", "data"],
  ColorProportionUpdateManyWithWhereWithoutMixedColorInput: ["where", "data"],
  UserCreateWithoutColorProportionsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors"],
  UserCreateOrConnectWithoutColorProportionsInput: ["where", "create"],
  MixedColorCreateWithoutColorProportionsInput: ["id", "user", "name", "color", "createdAt", "updatedAt"],
  MixedColorCreateOrConnectWithoutColorProportionsInput: ["where", "create"],
  RawColorCreateWithoutColorProportionsInput: ["id", "user", "name", "color", "createdAt", "updatedAt"],
  RawColorCreateOrConnectWithoutColorProportionsInput: ["where", "create"],
  UserUpsertWithoutColorProportionsInput: ["update", "create"],
  UserUpdateWithoutColorProportionsInput: ["id", "username", "email", "password", "createdAt", "updatedAt", "recipe", "savings", "wishlistItems", "expenses", "categories", "salary", "issues", "issueLabels", "rawColors", "mixedColors"],
  MixedColorUpsertWithoutColorProportionsInput: ["update", "create"],
  MixedColorUpdateWithoutColorProportionsInput: ["id", "user", "name", "color", "createdAt", "updatedAt"],
  RawColorUpsertWithoutColorProportionsInput: ["update", "create"],
  RawColorUpdateWithoutColorProportionsInput: ["id", "user", "name", "color", "createdAt", "updatedAt"],
  RecipeCreateManyUserInput: ["id", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  SavingCreateManyUserInput: ["id", "value", "date", "createdAt", "updatedAt"],
  WishlistItemCreateManyUserInput: ["id", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  ExpenseCreateManyUserInput: ["id", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  CategoryCreateManyUserInput: ["id", "name", "bgColor", "createdAt", "updatedAt"],
  IssueCreateManyUserInput: ["id", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  IssueLabelCreateManyUserInput: ["id", "name", "bgColor", "createdAt", "updatedAt"],
  RawColorCreateManyUserInput: ["id", "name", "color", "createdAt", "updatedAt"],
  MixedColorCreateManyUserInput: ["id", "name", "color", "createdAt", "updatedAt"],
  ColorProportionCreateManyUserInput: ["id", "mixedColorId", "rawColorId", "proportion", "createdAt", "updatedAt"],
  RecipeUpdateWithoutUserInput: ["id", "title", "description", "rating", "savedPosition", "createdAt", "updatedAt"],
  SavingUpdateWithoutUserInput: ["id", "value", "date", "createdAt", "updatedAt"],
  WishlistItemUpdateWithoutUserInput: ["id", "itemName", "priceInThousands", "createdAt", "updatedAt"],
  ExpenseUpdateWithoutUserInput: ["id", "name", "value", "rating", "date", "description", "timesPerMonth", "categories", "createdAt", "updatedAt"],
  CategoryUpdateWithoutUserInput: ["id", "expenses", "name", "bgColor", "createdAt", "updatedAt"],
  IssueUpdateWithoutUserInput: ["id", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt", "labels"],
  IssueLabelUpdateWithoutUserInput: ["id", "issues", "name", "bgColor", "createdAt", "updatedAt"],
  RawColorUpdateWithoutUserInput: ["id", "name", "color", "createdAt", "updatedAt", "colorProportions"],
  MixedColorUpdateWithoutUserInput: ["id", "name", "color", "colorProportions", "createdAt", "updatedAt"],
  ColorProportionUpdateWithoutUserInput: ["id", "mixedColor", "rawColor", "proportion", "createdAt", "updatedAt"],
  CategoryUpdateWithoutExpensesInput: ["id", "user", "name", "bgColor", "createdAt", "updatedAt"],
  ExpenseUpdateWithoutCategoriesInput: ["id", "user", "name", "value", "rating", "date", "description", "timesPerMonth", "createdAt", "updatedAt"],
  IssueLabelUpdateWithoutIssuesInput: ["id", "user", "name", "bgColor", "createdAt", "updatedAt"],
  IssueUpdateWithoutLabelsInput: ["id", "user", "position", "solvedPosition", "title", "solution", "isSolved", "solvedAt", "frequency", "intensity", "createdAt", "updatedAt"],
  ColorProportionCreateManyRawColorInput: ["id", "userId", "mixedColorId", "proportion", "createdAt", "updatedAt"],
  ColorProportionUpdateWithoutRawColorInput: ["id", "user", "mixedColor", "proportion", "createdAt", "updatedAt"],
  ColorProportionCreateManyMixedColorInput: ["id", "userId", "rawColorId", "proportion", "createdAt", "updatedAt"],
  ColorProportionUpdateWithoutMixedColorInput: ["id", "user", "rawColor", "proportion", "createdAt", "updatedAt"]
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

