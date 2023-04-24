import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteScalarWhereInput } from "../inputs/NhFavoriteScalarWhereInput";
import { NhFavoriteUpdateManyMutationInput } from "../inputs/NhFavoriteUpdateManyMutationInput";

@TypeGraphQL.InputType("NhFavoriteUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class NhFavoriteUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => NhFavoriteScalarWhereInput, {
    nullable: false
  })
  where!: NhFavoriteScalarWhereInput;

  @TypeGraphQL.Field(_type => NhFavoriteUpdateManyMutationInput, {
    nullable: false
  })
  data!: NhFavoriteUpdateManyMutationInput;
}
