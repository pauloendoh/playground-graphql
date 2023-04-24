import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorWhereInput } from "../inputs/NhAuthorWhereInput";

@TypeGraphQL.InputType("NhAuthorRelationFilter", {
  isAbstract: true
})
export class NhAuthorRelationFilter {
  @TypeGraphQL.Field(_type => NhAuthorWhereInput, {
    nullable: true
  })
  is?: NhAuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorWhereInput, {
    nullable: true
  })
  isNot?: NhAuthorWhereInput | undefined;
}
