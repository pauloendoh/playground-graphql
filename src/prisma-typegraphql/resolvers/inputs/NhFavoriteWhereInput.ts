import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorRelationFilter } from "../inputs/NhAuthorRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("NhFavoriteWhereInput", {
  isAbstract: true
})
export class NhFavoriteWhereInput {
  @TypeGraphQL.Field(_type => [NhFavoriteWhereInput], {
    nullable: true
  })
  AND?: NhFavoriteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteWhereInput], {
    nullable: true
  })
  OR?: NhFavoriteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteWhereInput], {
    nullable: true
  })
  NOT?: NhFavoriteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NhAuthorRelationFilter, {
    nullable: true
  })
  author?: NhAuthorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
