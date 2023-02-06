import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryCreateOrConnectWithoutUserInput } from "../inputs/SalaryCreateOrConnectWithoutUserInput";
import { SalaryCreateWithoutUserInput } from "../inputs/SalaryCreateWithoutUserInput";
import { SalaryUpdateWithoutUserInput } from "../inputs/SalaryUpdateWithoutUserInput";
import { SalaryUpsertWithoutUserInput } from "../inputs/SalaryUpsertWithoutUserInput";
import { SalaryWhereUniqueInput } from "../inputs/SalaryWhereUniqueInput";

@TypeGraphQL.InputType("SalaryUpdateOneWithoutUserNestedInput", {
  isAbstract: true
})
export class SalaryUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => SalaryCreateWithoutUserInput, {
    nullable: true
  })
  create?: SalaryCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SalaryCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: SalaryCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SalaryUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: SalaryUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SalaryWhereUniqueInput, {
    nullable: true
  })
  connect?: SalaryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SalaryUpdateWithoutUserInput, {
    nullable: true
  })
  update?: SalaryUpdateWithoutUserInput | undefined;
}
