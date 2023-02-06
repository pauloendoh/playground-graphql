import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryCreateWithoutUserInput } from "../inputs/SalaryCreateWithoutUserInput";
import { SalaryWhereUniqueInput } from "../inputs/SalaryWhereUniqueInput";

@TypeGraphQL.InputType("SalaryCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class SalaryCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SalaryWhereUniqueInput, {
    nullable: false
  })
  where!: SalaryWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalaryCreateWithoutUserInput, {
    nullable: false
  })
  create!: SalaryCreateWithoutUserInput;
}
