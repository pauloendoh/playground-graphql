import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemCreateWithoutUserInput } from "../inputs/WishlistItemCreateWithoutUserInput";
import { WishlistItemUpdateWithoutUserInput } from "../inputs/WishlistItemUpdateWithoutUserInput";
import { WishlistItemWhereUniqueInput } from "../inputs/WishlistItemWhereUniqueInput";

@TypeGraphQL.InputType("WishlistItemUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class WishlistItemUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WishlistItemWhereUniqueInput, {
    nullable: false
  })
  where!: WishlistItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => WishlistItemUpdateWithoutUserInput, {
    nullable: false
  })
  update!: WishlistItemUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => WishlistItemCreateWithoutUserInput, {
    nullable: false
  })
  create!: WishlistItemCreateWithoutUserInput;
}
