import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("NhFavoriteWhereUniqueInput", {
  isAbstract: true
})
export class NhFavoriteWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;
}
