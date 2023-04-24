import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhFavoriteUpdateInput } from "../../../inputs/NhFavoriteUpdateInput";
import { NhFavoriteWhereUniqueInput } from "../../../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNhFavoriteArgs {
  @TypeGraphQL.Field(_type => NhFavoriteUpdateInput, {
    nullable: false
  })
  data!: NhFavoriteUpdateInput;

  @TypeGraphQL.Field(_type => NhFavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: NhFavoriteWhereUniqueInput;
}
