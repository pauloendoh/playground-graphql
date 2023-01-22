import { IsString, MinLength } from "class-validator";
import * as TypeGraphQL from "type-graphql";
import { RecipeCreateWithoutUserInput } from "../../../prisma-typegraphql";

@TypeGraphQL.InputType()
export class RecipeValidInput implements RecipeCreateWithoutUserInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  @IsString()
  @MinLength(1)
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  description!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
