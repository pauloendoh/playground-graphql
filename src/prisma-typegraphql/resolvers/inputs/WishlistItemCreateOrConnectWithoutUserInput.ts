import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemCreateWithoutUserInput } from "../inputs/WishlistItemCreateWithoutUserInput";
import { WishlistItemWhereUniqueInput } from "../inputs/WishlistItemWhereUniqueInput";

@TypeGraphQL.InputType("WishlistItemCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class WishlistItemCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => WishlistItemWhereUniqueInput, {
    nullable: false
  })
  where!: WishlistItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => WishlistItemCreateWithoutUserInput, {
    nullable: false
  })
  create!: WishlistItemCreateWithoutUserInput;
}
