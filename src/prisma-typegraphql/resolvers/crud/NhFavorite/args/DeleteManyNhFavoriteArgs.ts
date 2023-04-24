import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhFavoriteWhereInput } from "../../../inputs/NhFavoriteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNhFavoriteArgs {
  @TypeGraphQL.Field(_type => NhFavoriteWhereInput, {
    nullable: true
  })
  where?: NhFavoriteWhereInput | undefined;
}
