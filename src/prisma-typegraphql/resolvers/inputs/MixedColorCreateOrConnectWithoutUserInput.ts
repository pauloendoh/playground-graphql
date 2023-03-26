import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCreateWithoutUserInput } from "../inputs/MixedColorCreateWithoutUserInput";
import { MixedColorWhereUniqueInput } from "../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.InputType("MixedColorCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class MixedColorCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MixedColorWhereUniqueInput, {
    nullable: false
  })
  where!: MixedColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => MixedColorCreateWithoutUserInput, {
    nullable: false
  })
  create!: MixedColorCreateWithoutUserInput;
}
