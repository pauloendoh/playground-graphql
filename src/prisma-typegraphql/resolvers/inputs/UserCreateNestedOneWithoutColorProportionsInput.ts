import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutColorProportionsInput } from "../inputs/UserCreateOrConnectWithoutColorProportionsInput";
import { UserCreateWithoutColorProportionsInput } from "../inputs/UserCreateWithoutColorProportionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutColorProportionsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutColorProportionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutColorProportionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutColorProportionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
