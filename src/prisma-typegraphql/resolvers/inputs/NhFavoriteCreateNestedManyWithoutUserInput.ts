import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCreateManyUserInputEnvelope } from "../inputs/NhFavoriteCreateManyUserInputEnvelope";
import { NhFavoriteCreateOrConnectWithoutUserInput } from "../inputs/NhFavoriteCreateOrConnectWithoutUserInput";
import { NhFavoriteCreateWithoutUserInput } from "../inputs/NhFavoriteCreateWithoutUserInput";
import { NhFavoriteWhereUniqueInput } from "../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.InputType("NhFavoriteCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class NhFavoriteCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [NhFavoriteCreateWithoutUserInput], {
    nullable: true
  })
  create?: NhFavoriteCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: NhFavoriteCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: NhFavoriteCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteWhereUniqueInput], {
    nullable: true
  })
  connect?: NhFavoriteWhereUniqueInput[] | undefined;
}
