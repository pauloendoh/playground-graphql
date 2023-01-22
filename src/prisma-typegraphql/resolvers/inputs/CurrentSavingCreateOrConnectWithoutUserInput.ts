import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingCreateWithoutUserInput } from "../inputs/CurrentSavingCreateWithoutUserInput";
import { CurrentSavingWhereUniqueInput } from "../inputs/CurrentSavingWhereUniqueInput";

@TypeGraphQL.InputType("CurrentSavingCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class CurrentSavingCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => CurrentSavingWhereUniqueInput, {
    nullable: false
  })
  where!: CurrentSavingWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrentSavingCreateWithoutUserInput, {
    nullable: false
  })
  create!: CurrentSavingCreateWithoutUserInput;
}
