import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteUpdateWithoutAuthorInput } from "../inputs/NhFavoriteUpdateWithoutAuthorInput";
import { NhFavoriteWhereUniqueInput } from "../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.InputType("NhFavoriteUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class NhFavoriteUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => NhFavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: NhFavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhFavoriteUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: NhFavoriteUpdateWithoutAuthorInput;
}
