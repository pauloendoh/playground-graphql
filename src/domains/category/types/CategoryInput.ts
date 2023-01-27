import { Field, InputType } from 'type-graphql'
import { Expense, User } from '../../../prisma-typegraphql'
import { Category } from '../../../prisma-typegraphql/models/Category'
import { CategoryCount } from '../../../prisma-typegraphql/resolvers/outputs/CategoryCount'

@InputType()
export class CategoryInput implements Category {
  @Field(() => String, { nullable: true })
  id: string

  userId: string

  user?: User | undefined

  expenses?: Expense[] | undefined

  @Field(() => String, { nullable: false })
  name: string

  @Field(() => String, { nullable: false })
  bgColor: string

  createdAt: Date

  updatedAt: Date
  _count?: CategoryCount | null | undefined
}
