import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingCreateManyUserInputEnvelope } from "../inputs/CurrentSavingCreateManyUserInputEnvelope";
import { CurrentSavingCreateOrConnectWithoutUserInput } from "../inputs/CurrentSavingCreateOrConnectWithoutUserInput";
import { CurrentSavingCreateWithoutUserInput } from "../inputs/CurrentSavingCreateWithoutUserInput";
import { CurrentSavingWhereUniqueInput } from "../inputs/CurrentSavingWhereUniqueInput";

@TypeGraphQL.InputType("CurrentSavingCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class CurrentSavingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CurrentSavingCreateWithoutUserInput], {
    nullable: true
  })
  create?: CurrentSavingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CurrentSavingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: CurrentSavingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingWhereUniqueInput], {
    nullable: true
  })
  connect?: CurrentSavingWhereUniqueInput[] | undefined;
}
