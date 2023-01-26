import { Decimal } from '@prisma/client/runtime'
import { IsNumberString, IsString, MinLength } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { Expense, User } from '../../../prisma-typegraphql'

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

  @Field(() => String, { nullable: false })
  @IsNumberString()
  value: Decimal

  @Field(() => Date, { nullable: true })
  date?: Date | null | undefined

  @Field(() => Number, { nullable: true })
  rating?: number | null | undefined

  @Field(() => String, { nullable: true })
  description?: string | null | undefined

  @Field(() => Date, { nullable: true })
  createdAt: Date

  @Field(() => Date, { nullable: true })
  updatedAt: Date
}
