import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNhAuthorsInput } from "../inputs/UserCreateOrConnectWithoutNhAuthorsInput";
import { UserCreateWithoutNhAuthorsInput } from "../inputs/UserCreateWithoutNhAuthorsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutNhAuthorsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutNhAuthorsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNhAuthorsInput, {
    nullable: true
  })
  create?: UserCreateWithoutNhAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNhAuthorsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNhAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
