import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("NhFavoriteScalarWhereInput", {
  isAbstract: true
})
export class NhFavoriteScalarWhereInput {
  @TypeGraphQL.Field(_type => [NhFavoriteScalarWhereInput], {
    nullable: true
  })
  AND?: NhFavoriteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteScalarWhereInput], {
    nullable: true
  })
  OR?: NhFavoriteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteScalarWhereInput], {
    nullable: true
  })
  NOT?: NhFavoriteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
