import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingCreateWithoutUserInput } from "../inputs/SavingCreateWithoutUserInput";
import { SavingWhereUniqueInput } from "../inputs/SavingWhereUniqueInput";

@TypeGraphQL.InputType("SavingCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class SavingCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SavingWhereUniqueInput, {
    nullable: false
  })
  where!: SavingWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavingCreateWithoutUserInput, {
    nullable: false
  })
  create!: SavingCreateWithoutUserInput;
}
