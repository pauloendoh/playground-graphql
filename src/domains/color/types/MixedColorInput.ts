import * as TypeGraphQL from 'type-graphql'
import {
  ColorProportion,
  MixedColor,
  MixedColorCount,
  User,
} from '../../../../prisma-typegraphql'
import { ColorProportionInput } from './ColorProportionInput'

@TypeGraphQL.InputType()
export class MixedColorInput implements MixedColor {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id: string

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId: string

  user?: User | undefined

  @TypeGraphQL.Field(() => String, { nullable: false })
  name: string

  @TypeGraphQL.Field(() => String, { nullable: false })
  color: string

  @TypeGraphQL.Field(() => [ColorProportionInput], { nullable: true })
  colorProportions?: ColorProportion[] | undefined

  @TypeGraphQL.Field(() => String, { nullable: true })
  createdAt: Date

  @TypeGraphQL.Field(() => String, { nullable: true })
  updatedAt: Date

  _count?: MixedColorCount | null | undefined
}
