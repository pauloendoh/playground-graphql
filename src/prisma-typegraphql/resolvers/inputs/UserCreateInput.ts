import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedManyWithoutUserInput } from "../inputs/CategoryCreateNestedManyWithoutUserInput";
import { ColorProportionCreateNestedManyWithoutUserInput } from "../inputs/ColorProportionCreateNestedManyWithoutUserInput";
import { ExpenseCreateNestedManyWithoutUserInput } from "../inputs/ExpenseCreateNestedManyWithoutUserInput";
import { IssueCreateNestedManyWithoutUserInput } from "../inputs/IssueCreateNestedManyWithoutUserInput";
import { IssueLabelCreateNestedManyWithoutUserInput } from "../inputs/IssueLabelCreateNestedManyWithoutUserInput";
import { MixedColorCreateNestedManyWithoutUserInput } from "../inputs/MixedColorCreateNestedManyWithoutUserInput";
import { RawColorCreateNestedManyWithoutUserInput } from "../inputs/RawColorCreateNestedManyWithoutUserInput";
import { RecipeCreateNestedManyWithoutUserInput } from "../inputs/RecipeCreateNestedManyWithoutUserInput";
import { SalaryCreateNestedOneWithoutUserInput } from "../inputs/SalaryCreateNestedOneWithoutUserInput";
import { SavingCreateNestedManyWithoutUserInput } from "../inputs/SavingCreateNestedManyWithoutUserInput";
import { WishlistItemCreateNestedManyWithoutUserInput } from "../inputs/WishlistItemCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => RecipeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  recipe?: RecipeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SavingCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  savings?: SavingCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  wishlistItems?: WishlistItemCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ExpenseCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  expenses?: ExpenseCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  categories?: CategoryCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SalaryCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  salary?: SalaryCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  issues?: IssueCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => IssueLabelCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  issueLabels?: IssueLabelCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RawColorCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  rawColors?: RawColorCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  mixedColors?: MixedColorCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ColorProportionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  colorProportions?: ColorProportionCreateNestedManyWithoutUserInput | undefined;
}
