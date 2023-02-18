import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateManyUserInputEnvelope } from "../inputs/IssueLabelCreateManyUserInputEnvelope";
import { IssueLabelCreateOrConnectWithoutUserInput } from "../inputs/IssueLabelCreateOrConnectWithoutUserInput";
import { IssueLabelCreateWithoutUserInput } from "../inputs/IssueLabelCreateWithoutUserInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class IssueLabelCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [IssueLabelCreateWithoutUserInput], {
    nullable: true
  })
  create?: IssueLabelCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: IssueLabelCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueLabelCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: IssueLabelCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueLabelWhereUniqueInput[] | undefined;
}
