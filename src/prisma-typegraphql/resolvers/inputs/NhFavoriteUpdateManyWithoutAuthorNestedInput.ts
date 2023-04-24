import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCreateManyAuthorInputEnvelope } from "../inputs/NhFavoriteCreateManyAuthorInputEnvelope";
import { NhFavoriteCreateOrConnectWithoutAuthorInput } from "../inputs/NhFavoriteCreateOrConnectWithoutAuthorInput";
import { NhFavoriteCreateWithoutAuthorInput } from "../inputs/NhFavoriteCreateWithoutAuthorInput";
import { NhFavoriteScalarWhereInput } from "../inputs/NhFavoriteScalarWhereInput";
import { NhFavoriteUpdateManyWithWhereWithoutAuthorInput } from "../inputs/NhFavoriteUpdateManyWithWhereWithoutAuthorInput";
import { NhFavoriteUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/NhFavoriteUpdateWithWhereUniqueWithoutAuthorInput";
import { NhFavoriteUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/NhFavoriteUpsertWithWhereUniqueWithoutAuthorInput";
import { NhFavoriteWhereUniqueInput } from "../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.InputType("NhFavoriteUpdateManyWithoutAuthorNestedInput", {
  isAbstract: true
})
export class NhFavoriteUpdateManyWithoutAuthorNestedInput {
  @TypeGraphQL.Field(_type => [NhFavoriteCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: NhFavoriteCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: NhFavoriteCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: NhFavoriteUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: NhFavoriteCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [NhFavoriteUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: NhFavoriteUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: NhFavoriteUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NhFavoriteScalarWhereInput[] | undefined;
}
