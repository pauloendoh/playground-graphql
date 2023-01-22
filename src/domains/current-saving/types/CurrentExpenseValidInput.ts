import { Prisma } from '@prisma/client'
import * as TypeGraphQL from 'type-graphql'
import { DecimalJSScalar } from '../../../prisma-typegraphql'
import { CurrentSavingCreateWithoutUserInput } from '../../../prisma-typegraphql/resolvers/inputs/CurrentSavingCreateWithoutUserInput'

@TypeGraphQL.InputType()
export class CurrentSavingValidInput
  implements CurrentSavingCreateWithoutUserInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: false,
  })
  value!: Prisma.Decimal

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined
}
