import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingCreateWithoutUserInput } from "../inputs/CurrentSavingCreateWithoutUserInput";
import { CurrentSavingUpdateWithoutUserInput } from "../inputs/CurrentSavingUpdateWithoutUserInput";
import { CurrentSavingWhereUniqueInput } from "../inputs/CurrentSavingWhereUniqueInput";

@TypeGraphQL.InputType("CurrentSavingUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class CurrentSavingUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CurrentSavingWhereUniqueInput, {
    nullable: false
  })
  where!: CurrentSavingWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrentSavingUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CurrentSavingUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CurrentSavingCreateWithoutUserInput, {
    nullable: false
  })
  create!: CurrentSavingCreateWithoutUserInput;
}
