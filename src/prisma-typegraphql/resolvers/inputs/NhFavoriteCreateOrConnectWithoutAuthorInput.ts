import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCreateWithoutAuthorInput } from "../inputs/NhFavoriteCreateWithoutAuthorInput";
import { NhFavoriteWhereUniqueInput } from "../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.InputType("NhFavoriteCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class NhFavoriteCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => NhFavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: NhFavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhFavoriteCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: NhFavoriteCreateWithoutAuthorInput;
}
