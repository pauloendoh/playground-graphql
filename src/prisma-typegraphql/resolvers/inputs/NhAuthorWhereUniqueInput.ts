import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("NhAuthorWhereUniqueInput", {
  isAbstract: true
})
export class NhAuthorWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;
}
