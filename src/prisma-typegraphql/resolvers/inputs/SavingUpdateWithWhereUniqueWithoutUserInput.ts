import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingUpdateWithoutUserInput } from "../inputs/SavingUpdateWithoutUserInput";
import { SavingWhereUniqueInput } from "../inputs/SavingWhereUniqueInput";

@TypeGraphQL.InputType("SavingUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SavingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SavingWhereUniqueInput, {
    nullable: false
  })
  where!: SavingWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavingUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SavingUpdateWithoutUserInput;
}
