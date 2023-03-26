import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutColorProportionsInput } from "../inputs/UserCreateOrConnectWithoutColorProportionsInput";
import { UserCreateWithoutColorProportionsInput } from "../inputs/UserCreateWithoutColorProportionsInput";
import { UserUpdateWithoutColorProportionsInput } from "../inputs/UserUpdateWithoutColorProportionsInput";
import { UserUpsertWithoutColorProportionsInput } from "../inputs/UserUpsertWithoutColorProportionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutColorProportionsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutColorProportionsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutColorProportionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutColorProportionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutColorProportionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutColorProportionsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutColorProportionsInput | undefined;
}
