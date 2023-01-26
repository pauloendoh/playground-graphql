import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WishlistItemCreateManyInput } from "../../../inputs/WishlistItemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWishlistItemArgs {
  @TypeGraphQL.Field(_type => [WishlistItemCreateManyInput], {
    nullable: false
  })
  data!: WishlistItemCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
