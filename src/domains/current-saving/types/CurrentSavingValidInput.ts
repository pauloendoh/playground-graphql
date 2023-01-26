import { Prisma } from '@prisma/client'
import { IsNumberString } from 'class-validator'
import * as TypeGraphQL from 'type-graphql'
import { CurrentSaving, User } from '../../../prisma-typegraphql'

@TypeGraphQL.InputType()
export class CurrentSavingValidInput implements CurrentSaving {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id: string

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId: string

  user?: User | undefined

  @TypeGraphQL.Field(() => String, { nullable: false })
  @IsNumberString()
  value: Prisma.Decimal

  @TypeGraphQL.Field(() => String, { nullable: true })
  date: Date

  @TypeGraphQL.Field(() => Date, { nullable: true })
  createdAt: Date

  @TypeGraphQL.Field(() => Date, { nullable: true })
  updatedAt: Date
}
