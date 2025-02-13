import { Decimal } from '@prisma/client/runtime'
import { IsNumberString, IsString, MinLength } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import {
  Category,
  Expense,
  ExpenseCount,
  User,
} from '../../../../prisma-typegraphql'

@InputType()
export class ExpenseInput implements Expense {
  @Field(() => String, { nullable: true })
  id: string

  @Field(() => String, { nullable: true })
  userId: string

  user?: User | undefined

  @Field(() => String, { nullable: false })
  @IsString()
  @MinLength(1)
  name: string

  @Field(() => String, {
    nullable: false,
  })
  @IsNumberString()
  value: Decimal

  @Field(() => Date, { nullable: true })
  date?: Date | null | undefined

  @Field(() => Number, { nullable: true })
  rating?: number | null | undefined

  @Field(() => String, { nullable: true })
  description?: string | null | undefined

  @Field(() => [String], { defaultValue: [] })
  categoryIds: string[]

  createdAt: Date
  updatedAt: Date

  @Field(() => String, { nullable: true })
  timesPerMonth?: Decimal | null | undefined

  categories?: Category[] | undefined
  _count?: ExpenseCount | null | undefined

  @Field(() => Number, { nullable: true })
  costScore?: number | null | undefined

  @Field(() => Number, { nullable: true })
  benefitScore?: number | null | undefined
}
