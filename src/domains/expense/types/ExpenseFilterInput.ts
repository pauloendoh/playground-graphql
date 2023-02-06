import { Field, InputType } from 'type-graphql'

@InputType()
export class ExpenseFilterInput {
  @Field({ nullable: true })
  expensesByText: string
}
