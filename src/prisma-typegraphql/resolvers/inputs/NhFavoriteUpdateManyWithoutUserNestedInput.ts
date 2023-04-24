import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCreateManyUserInputEnvelope } from "../inputs/NhFavoriteCreateManyUserInputEnvelope";
import { NhFavoriteCreateOrConnectWithoutUserInput } from "../inputs/NhFavoriteCreateOrConnectWithoutUserInput";
import { NhFavoriteCreateWithoutUserInput } from "../inputs/NhFavoriteCreateWithoutUserInput";
import { NhFavoriteScalarWhereInput } from "../inputs/NhFavoriteScalarWhereInput";
import { NhFavoriteUpdateManyWithWhereWithoutUserInput } from "../inputs/NhFavoriteUpdateManyWithWhereWithoutUserInput";
import { NhFavoriteUpdateWithWhereUniqueWithoutUserInput } from "../inputs/NhFavoriteUpdateWithWhereUniqueWithoutUserInput";
import { NhFavoriteUpsertWithWhereUniqueWithoutUserInput } from "../inputs/NhFavoriteUpsertWithWhereUniqueWithoutUserInput";
import { NhFavoriteWhereUniqueInput } from "../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.InputType("NhFavoriteUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class NhFavoriteUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [NhFavoriteCreateWithoutUserInput], {
    nullable: true
  })
  create?: NhFavoriteCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: NhFavoriteCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: NhFavoriteUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: NhFavoriteCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteWhereUniqueInput], {
    nullable: true
  })
  set?: NhFavoriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NhFavoriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteWhereUniqueInput], {
    nullable: true
  })
  delete?: NhFavoriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteWhereUniqueInput], {
    nullable: true
  })
  connect?: NhFavoriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: NhFavoriteUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: NhFavoriteUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NhFavoriteScalarWhereInput[] | undefined;
}
