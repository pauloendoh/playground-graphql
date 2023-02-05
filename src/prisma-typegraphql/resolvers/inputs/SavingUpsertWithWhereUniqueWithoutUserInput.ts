import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingCreateWithoutUserInput } from "../inputs/SavingCreateWithoutUserInput";
import { SavingUpdateWithoutUserInput } from "../inputs/SavingUpdateWithoutUserInput";
import { SavingWhereUniqueInput } from "../inputs/SavingWhereUniqueInput";

@TypeGraphQL.InputType("SavingUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SavingUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SavingWhereUniqueInput, {
    nullable: false
  })
  where!: SavingWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavingUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SavingUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SavingCreateWithoutUserInput, {
    nullable: false
  })
  create!: SavingCreateWithoutUserInput;
}
