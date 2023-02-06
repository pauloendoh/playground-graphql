import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSalaryInput } from "../inputs/UserCreateOrConnectWithoutSalaryInput";
import { UserCreateWithoutSalaryInput } from "../inputs/UserCreateWithoutSalaryInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSalaryInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSalaryInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSalaryInput, {
    nullable: true
  })
  create?: UserCreateWithoutSalaryInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSalaryInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSalaryInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
