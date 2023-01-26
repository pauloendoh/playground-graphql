import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistItemUpdateInput } from "../../../inputs/WishlistItemUpdateInput";
import { WishlistItemWhereUniqueInput } from "../../../inputs/WishlistItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWishlistItemArgs {
  @TypeGraphQL.Field(_type => WishlistItemUpdateInput, {
    nullable: false
  })
  data!: WishlistItemUpdateInput;

  @TypeGraphQL.Field(_type => WishlistItemWhereUniqueInput, {
    nullable: false
  })
  where!: WishlistItemWhereUniqueInput;
}
