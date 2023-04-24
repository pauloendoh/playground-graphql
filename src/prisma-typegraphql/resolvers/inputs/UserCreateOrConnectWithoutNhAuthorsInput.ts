import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutNhAuthorsInput } from "../inputs/UserCreateWithoutNhAuthorsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutNhAuthorsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutNhAuthorsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutNhAuthorsInput, {
    nullable: false
  })
  create!: UserCreateWithoutNhAuthorsInput;
}
