import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemScalarWhereInput } from "../inputs/WishlistItemScalarWhereInput";
import { WishlistItemUpdateManyMutationInput } from "../inputs/WishlistItemUpdateManyMutationInput";

@TypeGraphQL.InputType("WishlistItemUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class WishlistItemUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => WishlistItemScalarWhereInput, {
    nullable: false
  })
  where!: WishlistItemScalarWhereInput;

  @TypeGraphQL.Field(_type => WishlistItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: WishlistItemUpdateManyMutationInput;
}
