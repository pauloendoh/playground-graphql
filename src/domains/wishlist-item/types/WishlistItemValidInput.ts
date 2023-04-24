import { Decimal } from '@prisma/client/runtime'
import { IsNumberString, IsString, MinLength } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { User, WishlistItem } from '../../../prisma-typegraphql'

@InputType()
export class WishlistItemValidInput implements WishlistItem {
  @Field(() => String, { nullable: true })
  id: string

  @Field(() => String, { nullable: true })
  userId: string

  user?: User | undefined

  @Field(() => String, { nullable: false })
  @IsString()
  @MinLength(1)
  itemName: string

  @Field(() => String, { nullable: false })
  @IsString()
  @IsNumberString()
  priceInThousands: Decimal

  @Field(() => Number, { nullable: true })
  price?: number | null | undefined

  @Field(() => String, { nullable: true })
  createdAt: Date

  @Field(() => String, { nullable: true })
  updatedAt: Date
}
