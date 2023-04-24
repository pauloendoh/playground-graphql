import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCreateWithoutUserInput } from "../inputs/NhFavoriteCreateWithoutUserInput";
import { NhFavoriteWhereUniqueInput } from "../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.InputType("NhFavoriteCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class NhFavoriteCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => NhFavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: NhFavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhFavoriteCreateWithoutUserInput, {
    nullable: false
  })
  create!: NhFavoriteCreateWithoutUserInput;
}
