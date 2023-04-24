import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorWhereInput } from "../inputs/NhAuthorWhereInput";

@TypeGraphQL.InputType("NhAuthorListRelationFilter", {
  isAbstract: true
})
export class NhAuthorListRelationFilter {
  @TypeGraphQL.Field(_type => NhAuthorWhereInput, {
    nullable: true
  })
  every?: NhAuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorWhereInput, {
    nullable: true
  })
  some?: NhAuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => NhAuthorWhereInput, {
    nullable: true
  })
  none?: NhAuthorWhereInput | undefined;
}
