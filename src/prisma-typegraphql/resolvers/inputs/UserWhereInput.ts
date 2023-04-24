import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { ColorProportionListRelationFilter } from "../inputs/ColorProportionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExpenseListRelationFilter } from "../inputs/ExpenseListRelationFilter";
import { IssueLabelListRelationFilter } from "../inputs/IssueLabelListRelationFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { MixedColorListRelationFilter } from "../inputs/MixedColorListRelationFilter";
import { NhAuthorListRelationFilter } from "../inputs/NhAuthorListRelationFilter";
import { NhFavoriteListRelationFilter } from "../inputs/NhFavoriteListRelationFilter";
import { RawColorListRelationFilter } from "../inputs/RawColorListRelationFilter";
import { RecipeListRelationFilter } from "../inputs/RecipeListRelationFilter";
import { SalaryRelationFilter } from "../inputs/SalaryRelationFilter";
import { SavingListRelationFilter } from "../inputs/SavingListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { WishlistItemListRelationFilter } from "../inputs/WishlistItemListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => RecipeListRelationFilter, {
    nullable: true
  })
  recipe?: RecipeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SavingListRelationFilter, {
    nullable: true
  })
  savings?: SavingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => WishlistItemListRelationFilter, {
    nullable: true
  })
  wishlistItems?: WishlistItemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ExpenseListRelationFilter, {
    nullable: true
  })
  expenses?: ExpenseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryListRelationFilter, {
    nullable: true
  })
  categories?: CategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SalaryRelationFilter, {
    nullable: true
  })
  salary?: SalaryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IssueListRelationFilter, {
    nullable: true
  })
  issues?: IssueListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IssueLabelListRelationFilter, {
    nullable: true
  })
  issueLabels?: IssueLabelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RawColorListRelationFilter, {
    nullable: true
  })
  rawColors?: RawColorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MixedColorListRelationFilter, {
    nullable: true
  })
  mixedColors?: MixedColorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ColorProportionListRelationFilter, {
    nullable: true
  })
  colorProportions?: ColorProportionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteListRelationFilter, {
    nullable: true
  })
  nhFavorites?: NhFavoriteListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NhAuthorListRelationFilter, {
    nullable: true
  })
  nhAuthors?: NhAuthorListRelationFilter | undefined;
}
