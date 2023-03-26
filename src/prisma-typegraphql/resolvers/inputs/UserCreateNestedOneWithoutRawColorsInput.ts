import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRawColorsInput } from "../inputs/UserCreateOrConnectWithoutRawColorsInput";
import { UserCreateWithoutRawColorsInput } from "../inputs/UserCreateWithoutRawColorsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutRawColorsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutRawColorsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRawColorsInput, {
    nullable: true
  })
  create?: UserCreateWithoutRawColorsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRawColorsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRawColorsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
