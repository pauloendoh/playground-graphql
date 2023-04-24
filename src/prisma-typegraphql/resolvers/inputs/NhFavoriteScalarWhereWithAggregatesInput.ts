import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("NhFavoriteScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class NhFavoriteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [NhFavoriteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NhFavoriteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NhFavoriteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NhFavoriteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  authorUrl?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
