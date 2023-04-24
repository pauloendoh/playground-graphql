import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { NhFavorite } from "../models/NhFavorite";
import { User } from "../models/User";
import { NhAuthorCount } from "../resolvers/outputs/NhAuthorCount";

@TypeGraphQL.ObjectType("NhAuthor", {
  isAbstract: true
})
export class NhAuthor {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  checkedAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  favorites?: NhFavorite[];

  @TypeGraphQL.Field(_type => NhAuthorCount, {
    nullable: true
  })
  _count?: NhAuthorCount | null;
}
