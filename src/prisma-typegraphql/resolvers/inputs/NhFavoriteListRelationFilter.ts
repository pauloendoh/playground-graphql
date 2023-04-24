import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteWhereInput } from "../inputs/NhFavoriteWhereInput";

@TypeGraphQL.InputType("NhFavoriteListRelationFilter", {
  isAbstract: true
})
export class NhFavoriteListRelationFilter {
  @TypeGraphQL.Field(_type => NhFavoriteWhereInput, {
    nullable: true
  })
  every?: NhFavoriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteWhereInput, {
    nullable: true
  })
  some?: NhFavoriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteWhereInput, {
    nullable: true
  })
  none?: NhFavoriteWhereInput | undefined;
}
