import * as TypeGraphQL from 'type-graphql'
import { ColorProportion } from '../models/ColorProportion'
import { User } from '../models/User'
import { MixedColorCount } from '../resolvers/outputs/MixedColorCount'

@TypeGraphQL.ObjectType('MixedColor', {
  isAbstract: true,
})
export class MixedColor {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string

  user?: User

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  color!: string

  @TypeGraphQL.Field((_type) => [ColorProportion], {
    nullable: true,
  })
  colorProportions?: ColorProportion[] | null

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date

  @TypeGraphQL.Field((_type) => MixedColorCount, {
    nullable: true,
  })
  _count?: MixedColorCount | null
}
