import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryCreateWithoutUserInput } from "../inputs/SalaryCreateWithoutUserInput";
import { SalaryUpdateWithoutUserInput } from "../inputs/SalaryUpdateWithoutUserInput";

@TypeGraphQL.InputType("SalaryUpsertWithoutUserInput", {
  isAbstract: true
})
export class SalaryUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => SalaryUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SalaryUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SalaryCreateWithoutUserInput, {
    nullable: false
  })
  create!: SalaryCreateWithoutUserInput;
}
