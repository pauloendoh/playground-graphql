import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRawColorsInput } from "../inputs/UserCreateOrConnectWithoutRawColorsInput";
import { UserCreateWithoutRawColorsInput } from "../inputs/UserCreateWithoutRawColorsInput";
import { UserUpdateWithoutRawColorsInput } from "../inputs/UserUpdateWithoutRawColorsInput";
import { UserUpsertWithoutRawColorsInput } from "../inputs/UserUpsertWithoutRawColorsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutRawColorsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutRawColorsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRawColorsInput, {
    nullable: true
  })
  create?: UserCreateWithoutRawColorsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRawColorsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRawColorsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutRawColorsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutRawColorsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRawColorsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutRawColorsInput | undefined;
}
