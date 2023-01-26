import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemUpdateWithoutUserInput } from "../inputs/WishlistItemUpdateWithoutUserInput";
import { WishlistItemWhereUniqueInput } from "../inputs/WishlistItemWhereUniqueInput";

@TypeGraphQL.InputType("WishlistItemUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class WishlistItemUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WishlistItemWhereUniqueInput, {
    nullable: false
  })
  where!: WishlistItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => WishlistItemUpdateWithoutUserInput, {
    nullable: false
  })
  data!: WishlistItemUpdateWithoutUserInput;
}
