import * as TypeGraphQL from 'type-graphql'
import { RawColor, User } from '../../../prisma-typegraphql'

@TypeGraphQL.InputType()
export class RawColorInput implements RawColor {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id: string

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId: string

  user?: User | undefined

  @TypeGraphQL.Field(() => String, { nullable: false })
  name: string

  @TypeGraphQL.Field(() => String, { nullable: false })
  color: string

  @TypeGraphQL.Field(() => String, { nullable: true })
  createdAt: Date

  @TypeGraphQL.Field(() => String, { nullable: true })
  updatedAt: Date
}
