import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhFavoriteCreateInput } from "../../../inputs/NhFavoriteCreateInput";
import { NhFavoriteUpdateInput } from "../../../inputs/NhFavoriteUpdateInput";
import { NhFavoriteWhereUniqueInput } from "../../../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNhFavoriteArgs {
  @TypeGraphQL.Field(_type => NhFavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: NhFavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhFavoriteCreateInput, {
    nullable: false
  })
  create!: NhFavoriteCreateInput;

  @TypeGraphQL.Field(_type => NhFavoriteUpdateInput, {
    nullable: false
  })
  update!: NhFavoriteUpdateInput;
}
