import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistItemCreateInput } from "../../../inputs/WishlistItemCreateInput";
import { WishlistItemUpdateInput } from "../../../inputs/WishlistItemUpdateInput";
import { WishlistItemWhereUniqueInput } from "../../../inputs/WishlistItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWishlistItemArgs {
  @TypeGraphQL.Field(_type => WishlistItemWhereUniqueInput, {
    nullable: false
  })
  where!: WishlistItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => WishlistItemCreateInput, {
    nullable: false
  })
  create!: WishlistItemCreateInput;

  @TypeGraphQL.Field(_type => WishlistItemUpdateInput, {
    nullable: false
  })
  update!: WishlistItemUpdateInput;
}
