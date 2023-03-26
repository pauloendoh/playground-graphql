import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMixedColorsInput } from "../inputs/UserCreateWithoutMixedColorsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutMixedColorsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutMixedColorsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMixedColorsInput, {
    nullable: false
  })
  create!: UserCreateWithoutMixedColorsInput;
}
