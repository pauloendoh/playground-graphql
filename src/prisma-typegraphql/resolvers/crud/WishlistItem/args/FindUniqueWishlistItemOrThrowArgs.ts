import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistItemWhereUniqueInput } from "../../../inputs/WishlistItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWishlistItemOrThrowArgs {
  @TypeGraphQL.Field(_type => WishlistItemWhereUniqueInput, {
    nullable: false
  })
  where!: WishlistItemWhereUniqueInput;
}
