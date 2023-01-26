import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutWishlistItemsInput } from "../inputs/UserCreateNestedOneWithoutWishlistItemsInput";

@TypeGraphQL.InputType("WishlistItemCreateInput", {
  isAbstract: true
})
export class WishlistItemCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWishlistItemsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutWishlistItemsInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  itemName!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  priceInThousands!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
