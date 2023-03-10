import * as TypeGraphQL from 'type-graphql'
import { Int } from 'type-graphql'
import { Issue, User } from '../../../prisma-typegraphql'

@TypeGraphQL.InputType()
export class IssueInput implements Issue {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id: string

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId: string
  user?: User | undefined

  @TypeGraphQL.Field(() => Date, { nullable: true })
  createdAt: Date

  @TypeGraphQL.Field(() => Date, { nullable: true })
  updatedAt: Date

  @TypeGraphQL.Field(() => String)
  title: string

  @TypeGraphQL.Field(() => Int, { nullable: true })
  position: number

  @TypeGraphQL.Field(() => String)
  solution: string

  @TypeGraphQL.Field(() => Boolean)
  isSolved: boolean

  @TypeGraphQL.Field(() => [String], { defaultValue: [] })
  labelIds: string[]

  solvedPosition: number
}
