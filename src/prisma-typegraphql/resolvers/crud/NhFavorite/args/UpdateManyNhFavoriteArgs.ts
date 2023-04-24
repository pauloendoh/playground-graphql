import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhFavoriteUpdateManyMutationInput } from "../../../inputs/NhFavoriteUpdateManyMutationInput";
import { NhFavoriteWhereInput } from "../../../inputs/NhFavoriteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNhFavoriteArgs {
  @TypeGraphQL.Field(_type => NhFavoriteUpdateManyMutationInput, {
    nullable: false
  })
  data!: NhFavoriteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NhFavoriteWhereInput, {
    nullable: true
  })
  where?: NhFavoriteWhereInput | undefined;
}
