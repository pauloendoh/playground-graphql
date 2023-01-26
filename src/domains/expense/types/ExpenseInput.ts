import { Decimal } from '@prisma/client/runtime'
import { IsNumberString, IsString, MinLength } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { Expense, User } from '../../../prisma-typegraphql'

@InputType()
export class ExpenseInput implements Expense {
  @Field(() => String)
  id: string

  @Field(() => String)
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

  @Field(() => Date)
  date?: Date | null | undefined

  @Field(() => Number)
  rating?: number | null | undefined

  @Field(() => String)
  description?: string | null | undefined

  createdAt: Date

  updatedAt: Date
}
