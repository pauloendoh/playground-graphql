import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCreateWithoutAuthorInput } from "../inputs/NhFavoriteCreateWithoutAuthorInput";
import { NhFavoriteUpdateWithoutAuthorInput } from "../inputs/NhFavoriteUpdateWithoutAuthorInput";
import { NhFavoriteWhereUniqueInput } from "../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.InputType("NhFavoriteUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class NhFavoriteUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => NhFavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: NhFavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhFavoriteUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: NhFavoriteUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => NhFavoriteCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: NhFavoriteCreateWithoutAuthorInput;
}
