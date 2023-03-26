import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCreateWithoutColorProportionsInput } from "../inputs/MixedColorCreateWithoutColorProportionsInput";
import { MixedColorWhereUniqueInput } from "../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.InputType("MixedColorCreateOrConnectWithoutColorProportionsInput", {
  isAbstract: true
})
export class MixedColorCreateOrConnectWithoutColorProportionsInput {
  @TypeGraphQL.Field(_type => MixedColorWhereUniqueInput, {
    nullable: false
  })
  where!: MixedColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => MixedColorCreateWithoutColorProportionsInput, {
    nullable: false
  })
  create!: MixedColorCreateWithoutColorProportionsInput;
}
