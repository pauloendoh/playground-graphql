import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMixedColorsInput } from "../inputs/UserCreateOrConnectWithoutMixedColorsInput";
import { UserCreateWithoutMixedColorsInput } from "../inputs/UserCreateWithoutMixedColorsInput";
import { UserUpdateWithoutMixedColorsInput } from "../inputs/UserUpdateWithoutMixedColorsInput";
import { UserUpsertWithoutMixedColorsInput } from "../inputs/UserUpsertWithoutMixedColorsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMixedColorsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutMixedColorsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMixedColorsInput, {
    nullable: true
  })
  create?: UserCreateWithoutMixedColorsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMixedColorsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMixedColorsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMixedColorsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMixedColorsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMixedColorsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutMixedColorsInput | undefined;
}
