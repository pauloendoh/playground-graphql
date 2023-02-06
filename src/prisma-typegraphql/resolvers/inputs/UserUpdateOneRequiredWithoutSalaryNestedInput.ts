import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSalaryInput } from "../inputs/UserCreateOrConnectWithoutSalaryInput";
import { UserCreateWithoutSalaryInput } from "../inputs/UserCreateWithoutSalaryInput";
import { UserUpdateWithoutSalaryInput } from "../inputs/UserUpdateWithoutSalaryInput";
import { UserUpsertWithoutSalaryInput } from "../inputs/UserUpsertWithoutSalaryInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSalaryNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutSalaryNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSalaryInput, {
    nullable: true
  })
  create?: UserCreateWithoutSalaryInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSalaryInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSalaryInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSalaryInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSalaryInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSalaryInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSalaryInput | undefined;
}
