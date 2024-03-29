import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category } from "../models/Category";
import { ColorProportion } from "../models/ColorProportion";
import { Expense } from "../models/Expense";
import { Issue } from "../models/Issue";
import { IssueLabel } from "../models/IssueLabel";
import { MixedColor } from "../models/MixedColor";
import { NhAuthor } from "../models/NhAuthor";
import { NhFavorite } from "../models/NhFavorite";
import { RawColor } from "../models/RawColor";
import { Recipe } from "../models/Recipe";
import { Salary } from "../models/Salary";
import { Saving } from "../models/Saving";
import { WishlistItem } from "../models/WishlistItem";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  recipe?: Recipe[];

  savings?: Saving[];

  wishlistItems?: WishlistItem[];

  expenses?: Expense[];

  categories?: Category[];

  salary?: Salary | null;

  issues?: Issue[];

  issueLabels?: IssueLabel[];

  rawColors?: RawColor[];

  mixedColors?: MixedColor[];

  colorProportions?: ColorProportion[];

  nhFavorites?: NhFavorite[];

  nhAuthors?: NhAuthor[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
