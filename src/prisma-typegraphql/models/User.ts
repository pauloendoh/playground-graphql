import * as TypeGraphQL from 'type-graphql'
import { Category } from '../models/Category'
import { Expense } from '../models/Expense'
import { Recipe } from '../models/Recipe'
import { Saving } from '../models/Saving'
import { WishlistItem } from '../models/WishlistItem'
import { UserCount } from '../resolvers/outputs/UserCount'

@TypeGraphQL.ObjectType('User', {
  isAbstract: true,
})
export class User {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  username!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password!: string

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date

  recipe?: Recipe[]

  savings?: Saving[]

  wishlistItems?: WishlistItem[]

  expenses?: Expense[]

  categories?: Category[]

  @TypeGraphQL.Field((_type) => UserCount, {
    nullable: true,
  })
  _count?: UserCount | null
}
