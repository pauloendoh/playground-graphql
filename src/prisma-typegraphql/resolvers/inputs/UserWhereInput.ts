import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { CurrentSavingListRelationFilter } from "../inputs/CurrentSavingListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExpenseListRelationFilter } from "../inputs/ExpenseListRelationFilter";
import { RecipeListRelationFilter } from "../inputs/RecipeListRelationFilter";
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

  @TypeGraphQL.Field(_type => CurrentSavingListRelationFilter, {
    nullable: true
  })
  currentSavings?: CurrentSavingListRelationFilter | undefined;

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
}
