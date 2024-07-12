import { Field, InputType } from 'type-graphql'
import { IssueLabel } from '../../../../prisma-typegraphql'

@InputType()
export class IssueLabelInput implements IssueLabel {
  @Field(() => String, { nullable: true })
  id: string

  userId: string

  @Field(() => String, { nullable: false })
  name: string

  @Field(() => String, { nullable: false })
  bgColor: string

  createdAt: Date

  updatedAt: Date
}
