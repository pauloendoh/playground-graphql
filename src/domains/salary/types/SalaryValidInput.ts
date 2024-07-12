import { IsNumber } from 'class-validator'
import * as TypeGraphQL from 'type-graphql'
import { Field, Int } from 'type-graphql'
import { Salary, User } from '../../../../prisma-typegraphql'

@TypeGraphQL.InputType()
export class SalaryValidInput implements Salary {
  @Field(() => String, { nullable: true })
  id: string

  userId: string
  user?: User | undefined

  @Field(() => Int, { nullable: true })
  @IsNumber()
  value: number

  createdAt: Date
  updatedAt: Date
}
