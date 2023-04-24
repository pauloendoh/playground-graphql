import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateManyUserInput } from "../inputs/NhAuthorCreateManyUserInput";

@TypeGraphQL.InputType("NhAuthorCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class NhAuthorCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [NhAuthorCreateManyUserInput], {
    nullable: false
  })
  data!: NhAuthorCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
