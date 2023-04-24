import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { NhAuthor } from "../models/NhAuthor";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("NhFavorite", {
  isAbstract: true
})
export class NhFavorite {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorUrl!: string;

  author?: NhAuthor;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;
}
