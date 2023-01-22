import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingUpdateWithoutUserInput } from "../inputs/CurrentSavingUpdateWithoutUserInput";
import { CurrentSavingWhereUniqueInput } from "../inputs/CurrentSavingWhereUniqueInput";

@TypeGraphQL.InputType("CurrentSavingUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class CurrentSavingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CurrentSavingWhereUniqueInput, {
    nullable: false
  })
  where!: CurrentSavingWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrentSavingUpdateWithoutUserInput, {
    nullable: false
  })
  data!: CurrentSavingUpdateWithoutUserInput;
}
