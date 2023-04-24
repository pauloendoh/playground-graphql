import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("WishlistItemScalarWhereInput", {
  isAbstract: true
})
export class WishlistItemScalarWhereInput {
  @TypeGraphQL.Field(_type => [WishlistItemScalarWhereInput], {
    nullable: true
  })
  AND?: WishlistItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemScalarWhereInput], {
    nullable: true
  })
  OR?: WishlistItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemScalarWhereInput], {
    nullable: true
  })
  NOT?: WishlistItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  itemName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  priceInThousands?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  price?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
