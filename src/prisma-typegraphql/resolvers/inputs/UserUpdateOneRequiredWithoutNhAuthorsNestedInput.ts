import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNhAuthorsInput } from "../inputs/UserCreateOrConnectWithoutNhAuthorsInput";
import { UserCreateWithoutNhAuthorsInput } from "../inputs/UserCreateWithoutNhAuthorsInput";
import { UserUpdateWithoutNhAuthorsInput } from "../inputs/UserUpdateWithoutNhAuthorsInput";
import { UserUpsertWithoutNhAuthorsInput } from "../inputs/UserUpsertWithoutNhAuthorsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutNhAuthorsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutNhAuthorsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNhAuthorsInput, {
    nullable: true
  })
  create?: UserCreateWithoutNhAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNhAuthorsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNhAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutNhAuthorsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutNhAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutNhAuthorsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutNhAuthorsInput | undefined;
}
