import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorUpdateWithoutUserInput } from "../inputs/MixedColorUpdateWithoutUserInput";
import { MixedColorWhereUniqueInput } from "../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.InputType("MixedColorUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MixedColorUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MixedColorWhereUniqueInput, {
    nullable: false
  })
  where!: MixedColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => MixedColorUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MixedColorUpdateWithoutUserInput;
}
