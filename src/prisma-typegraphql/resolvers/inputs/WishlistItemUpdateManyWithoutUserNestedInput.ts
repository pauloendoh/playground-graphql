import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemCreateManyUserInputEnvelope } from "../inputs/WishlistItemCreateManyUserInputEnvelope";
import { WishlistItemCreateOrConnectWithoutUserInput } from "../inputs/WishlistItemCreateOrConnectWithoutUserInput";
import { WishlistItemCreateWithoutUserInput } from "../inputs/WishlistItemCreateWithoutUserInput";
import { WishlistItemScalarWhereInput } from "../inputs/WishlistItemScalarWhereInput";
import { WishlistItemUpdateManyWithWhereWithoutUserInput } from "../inputs/WishlistItemUpdateManyWithWhereWithoutUserInput";
import { WishlistItemUpdateWithWhereUniqueWithoutUserInput } from "../inputs/WishlistItemUpdateWithWhereUniqueWithoutUserInput";
import { WishlistItemUpsertWithWhereUniqueWithoutUserInput } from "../inputs/WishlistItemUpsertWithWhereUniqueWithoutUserInput";
import { WishlistItemWhereUniqueInput } from "../inputs/WishlistItemWhereUniqueInput";

@TypeGraphQL.InputType("WishlistItemUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class WishlistItemUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [WishlistItemCreateWithoutUserInput], {
    nullable: true
  })
  create?: WishlistItemCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: WishlistItemCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: WishlistItemUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => WishlistItemCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: WishlistItemCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemWhereUniqueInput], {
    nullable: true
  })
  set?: WishlistItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WishlistItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemWhereUniqueInput], {
    nullable: true
  })
  delete?: WishlistItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemWhereUniqueInput], {
    nullable: true
  })
  connect?: WishlistItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: WishlistItemUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: WishlistItemUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WishlistItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WishlistItemScalarWhereInput[] | undefined;
}
