import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryCreateOrConnectWithoutUserInput } from "../inputs/SalaryCreateOrConnectWithoutUserInput";
import { SalaryCreateWithoutUserInput } from "../inputs/SalaryCreateWithoutUserInput";
import { SalaryWhereUniqueInput } from "../inputs/SalaryWhereUniqueInput";

@TypeGraphQL.InputType("SalaryCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class SalaryCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => SalaryCreateWithoutUserInput, {
    nullable: true
  })
  create?: SalaryCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SalaryCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: SalaryCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SalaryWhereUniqueInput, {
    nullable: true
  })
  connect?: SalaryWhereUniqueInput | undefined;
}
