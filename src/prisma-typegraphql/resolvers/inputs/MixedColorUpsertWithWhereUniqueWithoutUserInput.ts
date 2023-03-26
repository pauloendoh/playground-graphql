import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCreateWithoutUserInput } from "../inputs/MixedColorCreateWithoutUserInput";
import { MixedColorUpdateWithoutUserInput } from "../inputs/MixedColorUpdateWithoutUserInput";
import { MixedColorWhereUniqueInput } from "../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.InputType("MixedColorUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MixedColorUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MixedColorWhereUniqueInput, {
    nullable: false
  })
  where!: MixedColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => MixedColorUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MixedColorUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MixedColorCreateWithoutUserInput, {
    nullable: false
  })
  create!: MixedColorCreateWithoutUserInput;
}
