import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { NhFavoriteListRelationFilter } from "../inputs/NhFavoriteListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("NhAuthorWhereInput", {
  isAbstract: true
})
export class NhAuthorWhereInput {
  @TypeGraphQL.Field(_type => [NhAuthorWhereInput], {
    nullable: true
  })
  AND?: NhAuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorWhereInput], {
    nullable: true
  })
  OR?: NhAuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorWhereInput], {
    nullable: true
  })
  NOT?: NhAuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  checkedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteListRelationFilter, {
    nullable: true
  })
  favorites?: NhFavoriteListRelationFilter | undefined;
}
