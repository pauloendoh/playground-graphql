import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemCreateManyUserInputEnvelope } from "../inputs/WishlistItemCreateManyUserInputEnvelope";
import { WishlistItemCreateOrConnectWithoutUserInput } from "../inputs/WishlistItemCreateOrConnectWithoutUserInput";
import { WishlistItemCreateWithoutUserInput } from "../inputs/WishlistItemCreateWithoutUserInput";
import { WishlistItemWhereUniqueInput } from "../inputs/WishlistItemWhereUniqueInput";

@TypeGraphQL.InputType("WishlistItemCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class WishlistItemCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [WishlistItemCreateWithoutUserInput], {
    nullable: true
  })
  create?: WishlistItemCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: WishlistItemCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => WishlistItemCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: WishlistItemCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemWhereUniqueInput], {
    nullable: true
  })
  connect?: WishlistItemWhereUniqueInput[] | undefined;
}
