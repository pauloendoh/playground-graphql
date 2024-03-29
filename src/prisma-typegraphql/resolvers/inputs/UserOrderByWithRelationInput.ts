import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryOrderByRelationAggregateInput } from "../inputs/CategoryOrderByRelationAggregateInput";
import { ColorProportionOrderByRelationAggregateInput } from "../inputs/ColorProportionOrderByRelationAggregateInput";
import { ExpenseOrderByRelationAggregateInput } from "../inputs/ExpenseOrderByRelationAggregateInput";
import { IssueLabelOrderByRelationAggregateInput } from "../inputs/IssueLabelOrderByRelationAggregateInput";
import { IssueOrderByRelationAggregateInput } from "../inputs/IssueOrderByRelationAggregateInput";
import { MixedColorOrderByRelationAggregateInput } from "../inputs/MixedColorOrderByRelationAggregateInput";
import { NhAuthorOrderByRelationAggregateInput } from "../inputs/NhAuthorOrderByRelationAggregateInput";
import { NhFavoriteOrderByRelationAggregateInput } from "../inputs/NhFavoriteOrderByRelationAggregateInput";
import { RawColorOrderByRelationAggregateInput } from "../inputs/RawColorOrderByRelationAggregateInput";
import { RecipeOrderByRelationAggregateInput } from "../inputs/RecipeOrderByRelationAggregateInput";
import { SalaryOrderByWithRelationInput } from "../inputs/SalaryOrderByWithRelationInput";
import { SavingOrderByRelationAggregateInput } from "../inputs/SavingOrderByRelationAggregateInput";
import { WishlistItemOrderByRelationAggregateInput } from "../inputs/WishlistItemOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RecipeOrderByRelationAggregateInput, {
    nullable: true
  })
  recipe?: RecipeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavingOrderByRelationAggregateInput, {
    nullable: true
  })
  savings?: SavingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemOrderByRelationAggregateInput, {
    nullable: true
  })
  wishlistItems?: WishlistItemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpenseOrderByRelationAggregateInput, {
    nullable: true
  })
  expenses?: ExpenseOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByRelationAggregateInput, {
    nullable: true
  })
  categories?: CategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SalaryOrderByWithRelationInput, {
    nullable: true
  })
  salary?: SalaryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => IssueOrderByRelationAggregateInput, {
    nullable: true
  })
  issues?: IssueOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IssueLabelOrderByRelationAggregateInput, {
    nullable: true
  })
  issueLabels?: IssueLabelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RawColorOrderByRelationAggregateInput, {
    nullable: true
  })
  rawColors?: RawColorOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorOrderByRelationAggregateInput, {
    nullable: true
  })
  mixedColors?: MixedColorOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ColorProportionOrderByRelationAggregateInput, {
    nullable: true
  })
  colorProportions?: ColorProportionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteOrderByRelationAggregateInput, {
    nullable: true
  })
  nhFavorites?: NhFavoriteOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorOrderByRelationAggregateInput, {
    nullable: true
  })
  nhAuthors?: NhAuthorOrderByRelationAggregateInput | undefined;
}
