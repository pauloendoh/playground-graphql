import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMixedColorsInput } from "../inputs/UserCreateOrConnectWithoutMixedColorsInput";
import { UserCreateWithoutMixedColorsInput } from "../inputs/UserCreateWithoutMixedColorsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutMixedColorsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutMixedColorsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMixedColorsInput, {
    nullable: true
  })
  create?: UserCreateWithoutMixedColorsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMixedColorsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMixedColorsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
