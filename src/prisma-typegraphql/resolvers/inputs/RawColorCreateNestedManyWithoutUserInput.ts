import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCreateManyUserInputEnvelope } from "../inputs/RawColorCreateManyUserInputEnvelope";
import { RawColorCreateOrConnectWithoutUserInput } from "../inputs/RawColorCreateOrConnectWithoutUserInput";
import { RawColorCreateWithoutUserInput } from "../inputs/RawColorCreateWithoutUserInput";
import { RawColorWhereUniqueInput } from "../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.InputType("RawColorCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class RawColorCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [RawColorCreateWithoutUserInput], {
    nullable: true
  })
  create?: RawColorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RawColorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => RawColorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: RawColorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RawColorWhereUniqueInput], {
    nullable: true
  })
  connect?: RawColorWhereUniqueInput[] | undefined;
}
