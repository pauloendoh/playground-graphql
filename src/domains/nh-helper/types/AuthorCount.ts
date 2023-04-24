import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class AuthorCount {
  @Field()
  authorUrl: string

  @Field()
  count: number
}
