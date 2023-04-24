import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCreateManyAuthorInput } from "../inputs/NhFavoriteCreateManyAuthorInput";

@TypeGraphQL.InputType("NhFavoriteCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class NhFavoriteCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [NhFavoriteCreateManyAuthorInput], {
    nullable: false
  })
  data!: NhFavoriteCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
