import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRecipeInput } from "../inputs/UserCreateWithoutRecipeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutRecipeInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutRecipeInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRecipeInput, {
    nullable: false
  })
  create!: UserCreateWithoutRecipeInput;
}
