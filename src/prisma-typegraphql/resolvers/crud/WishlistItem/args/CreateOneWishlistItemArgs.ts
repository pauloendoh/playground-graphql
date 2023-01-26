import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistItemCreateInput } from "../../../inputs/WishlistItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWishlistItemArgs {
  @TypeGraphQL.Field(_type => WishlistItemCreateInput, {
    nullable: false
  })
  data!: WishlistItemCreateInput;
}
