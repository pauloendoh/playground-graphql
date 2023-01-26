import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistItemOrderByWithAggregationInput } from "../../../inputs/WishlistItemOrderByWithAggregationInput";
import { WishlistItemScalarWhereWithAggregatesInput } from "../../../inputs/WishlistItemScalarWhereWithAggregatesInput";
import { WishlistItemWhereInput } from "../../../inputs/WishlistItemWhereInput";
import { WishlistItemScalarFieldEnum } from "../../../../enums/WishlistItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWishlistItemArgs {
  @TypeGraphQL.Field(_type => WishlistItemWhereInput, {
    nullable: true
  })
  where?: WishlistItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: WishlistItemOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "itemName" | "priceInThousands" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => WishlistItemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: WishlistItemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
