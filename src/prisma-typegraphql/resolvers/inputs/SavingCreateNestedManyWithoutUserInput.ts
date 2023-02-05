import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingCreateManyUserInputEnvelope } from "../inputs/SavingCreateManyUserInputEnvelope";
import { SavingCreateOrConnectWithoutUserInput } from "../inputs/SavingCreateOrConnectWithoutUserInput";
import { SavingCreateWithoutUserInput } from "../inputs/SavingCreateWithoutUserInput";
import { SavingWhereUniqueInput } from "../inputs/SavingWhereUniqueInput";

@TypeGraphQL.InputType("SavingCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class SavingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SavingCreateWithoutUserInput], {
    nullable: true
  })
  create?: SavingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SavingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SavingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SavingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SavingWhereUniqueInput], {
    nullable: true
  })
  connect?: SavingWhereUniqueInput[] | undefined;
}
