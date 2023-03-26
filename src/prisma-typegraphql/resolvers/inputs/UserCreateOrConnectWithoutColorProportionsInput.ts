import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutColorProportionsInput } from "../inputs/UserCreateWithoutColorProportionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutColorProportionsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutColorProportionsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutColorProportionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutColorProportionsInput;
}
