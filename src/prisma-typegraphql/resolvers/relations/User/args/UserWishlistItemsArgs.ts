import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistItemOrderByWithRelationInput } from "../../../inputs/WishlistItemOrderByWithRelationInput";
import { WishlistItemWhereInput } from "../../../inputs/WishlistItemWhereInput";
import { WishlistItemWhereUniqueInput } from "../../../inputs/WishlistItemWhereUniqueInput";
import { WishlistItemScalarFieldEnum } from "../../../../enums/WishlistItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserWishlistItemsArgs {
  @TypeGraphQL.Field(_type => WishlistItemWhereInput, {
    nullable: true
  })
  where?: WishlistItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WishlistItemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WishlistItemWhereUniqueInput, {
    nullable: true
  })
  cursor?: WishlistItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "itemName" | "priceInThousands" | "price" | "createdAt" | "updatedAt"> | undefined;
}
