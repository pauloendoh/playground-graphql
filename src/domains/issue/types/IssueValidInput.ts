import * as TypeGraphQL from 'type-graphql'
import { Issue, User } from '../../../prisma-typegraphql'

@TypeGraphQL.InputType()
export class IssueValidInput implements Issue {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id: string

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId: string
  user?: User | undefined

  createdAt: Date
  updatedAt: Date

  @TypeGraphQL.Field(() => String)
  title: string

  @TypeGraphQL.Field(() => String)
  solution: string

  @TypeGraphQL.Field(() => Boolean)
  isSolved: boolean
}
