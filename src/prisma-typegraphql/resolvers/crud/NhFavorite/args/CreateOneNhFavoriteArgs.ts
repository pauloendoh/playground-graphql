import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhFavoriteCreateInput } from "../../../inputs/NhFavoriteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNhFavoriteArgs {
  @TypeGraphQL.Field(_type => NhFavoriteCreateInput, {
    nullable: false
  })
  data!: NhFavoriteCreateInput;
}
