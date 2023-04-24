import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteUpdateWithoutUserInput } from "../inputs/NhFavoriteUpdateWithoutUserInput";
import { NhFavoriteWhereUniqueInput } from "../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.InputType("NhFavoriteUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class NhFavoriteUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => NhFavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: NhFavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhFavoriteUpdateWithoutUserInput, {
    nullable: false
  })
  data!: NhFavoriteUpdateWithoutUserInput;
}
