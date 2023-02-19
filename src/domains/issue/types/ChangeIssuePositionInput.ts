import * as TypeGraphQL from 'type-graphql'
import { Int } from 'type-graphql'

@TypeGraphQL.InputType()
export class ChangeIssuePositionInput {
  @TypeGraphQL.Field(() => String)
  issueId: string

  @TypeGraphQL.Field(() => Int)
  fromPosition: number

  @TypeGraphQL.Field(() => Int)
  toPosition: number
}
