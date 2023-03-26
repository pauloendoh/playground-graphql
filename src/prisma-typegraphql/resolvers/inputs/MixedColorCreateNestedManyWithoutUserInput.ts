import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCreateManyUserInputEnvelope } from "../inputs/MixedColorCreateManyUserInputEnvelope";
import { MixedColorCreateOrConnectWithoutUserInput } from "../inputs/MixedColorCreateOrConnectWithoutUserInput";
import { MixedColorCreateWithoutUserInput } from "../inputs/MixedColorCreateWithoutUserInput";
import { MixedColorWhereUniqueInput } from "../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.InputType("MixedColorCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class MixedColorCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MixedColorCreateWithoutUserInput], {
    nullable: true
  })
  create?: MixedColorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MixedColorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MixedColorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MixedColorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MixedColorWhereUniqueInput], {
    nullable: true
  })
  connect?: MixedColorWhereUniqueInput[] | undefined;
}
