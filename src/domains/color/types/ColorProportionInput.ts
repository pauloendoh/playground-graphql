import * as TypeGraphQL from 'type-graphql'
import { ColorProportion, RawColor } from '../../../../prisma-typegraphql'

@TypeGraphQL.InputType()
export class ColorProportionInput implements ColorProportion {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id: string

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId: string

  @TypeGraphQL.Field(() => String, { nullable: true })
  mixedColorId: string

  rawColor?: RawColor | undefined

  @TypeGraphQL.Field(() => String, { nullable: false })
  rawColorId: string

  @TypeGraphQL.Field(() => Number, { nullable: false })
  proportion: number

  @TypeGraphQL.Field(() => Date, { nullable: true })
  createdAt: Date

  @TypeGraphQL.Field(() => Date, { nullable: true })
  updatedAt: Date
}
