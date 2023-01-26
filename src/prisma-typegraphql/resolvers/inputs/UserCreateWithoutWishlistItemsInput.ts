import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedManyWithoutUserInput } from "../inputs/CategoryCreateNestedManyWithoutUserInput";
import { CurrentSavingCreateNestedManyWithoutUserInput } from "../inputs/CurrentSavingCreateNestedManyWithoutUserInput";
import { ExpenseCreateNestedManyWithoutUserInput } from "../inputs/ExpenseCreateNestedManyWithoutUserInput";
import { RecipeCreateNestedManyWithoutUserInput } from "../inputs/RecipeCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutWishlistItemsInput", {
  isAbstract: true
})
export class UserCreateWithoutWishlistItemsInput {
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

  @TypeGraphQL.Field(_type => CurrentSavingCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  currentSavings?: CurrentSavingCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ExpenseCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  expenses?: ExpenseCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  categories?: CategoryCreateNestedManyWithoutUserInput | undefined;
}
