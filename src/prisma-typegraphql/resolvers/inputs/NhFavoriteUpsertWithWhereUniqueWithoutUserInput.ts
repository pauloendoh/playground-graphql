import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCreateWithoutUserInput } from "../inputs/NhFavoriteCreateWithoutUserInput";
import { NhFavoriteUpdateWithoutUserInput } from "../inputs/NhFavoriteUpdateWithoutUserInput";
import { NhFavoriteWhereUniqueInput } from "../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.InputType("NhFavoriteUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class NhFavoriteUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => NhFavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: NhFavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhFavoriteUpdateWithoutUserInput, {
    nullable: false
  })
  update!: NhFavoriteUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => NhFavoriteCreateWithoutUserInput, {
    nullable: false
  })
  create!: NhFavoriteCreateWithoutUserInput;
}
