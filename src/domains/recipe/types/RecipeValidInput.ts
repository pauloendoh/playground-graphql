import { IsString } from 'class-validator'
import * as TypeGraphQL from 'type-graphql'
import { Recipe, User } from '../../../prisma-typegraphql'

@TypeGraphQL.InputType()
export class RecipeValidInput implements Recipe {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id: string

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId: string

  user?: User | undefined

  @TypeGraphQL.Field(() => String, { nullable: false })
  @IsString()
  title: string

  @TypeGraphQL.Field(() => String, { nullable: false })
  @IsString()
  description: string

  @TypeGraphQL.Field(() => Date, { nullable: true })
  createdAt: Date

  @TypeGraphQL.Field(() => Number, { nullable: true })
  rating?: number | null | undefined

  @TypeGraphQL.Field(() => Date, { nullable: true })
  updatedAt: Date

  @TypeGraphQL.Field(() => Number, { nullable: true })
  savedPosition?: number | null | undefined
}
