import { Field, InputType } from 'type-graphql'

@InputType()
export class PaginationInput {
  @Field(() => Number, { nullable: true })
  page?: number

  @Field(() => Number, { nullable: true })
  pageSize?: number
}
