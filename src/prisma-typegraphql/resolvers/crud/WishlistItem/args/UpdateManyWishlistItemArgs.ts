import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistItemUpdateManyMutationInput } from "../../../inputs/WishlistItemUpdateManyMutationInput";
import { WishlistItemWhereInput } from "../../../inputs/WishlistItemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWishlistItemArgs {
  @TypeGraphQL.Field(_type => WishlistItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: WishlistItemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WishlistItemWhereInput, {
    nullable: true
  })
  where?: WishlistItemWhereInput | undefined;
}
