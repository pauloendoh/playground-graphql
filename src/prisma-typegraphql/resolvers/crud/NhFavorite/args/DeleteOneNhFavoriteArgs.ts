import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhFavoriteWhereUniqueInput } from "../../../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneNhFavoriteArgs {
  @TypeGraphQL.Field(_type => NhFavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: NhFavoriteWhereUniqueInput;
}
