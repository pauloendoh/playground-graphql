import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistItemWhereInput } from "../../../inputs/WishlistItemWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWishlistItemArgs {
  @TypeGraphQL.Field(_type => WishlistItemWhereInput, {
    nullable: true
  })
  where?: WishlistItemWhereInput | undefined;
}
