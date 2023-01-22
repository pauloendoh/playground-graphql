import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRecipeInput } from "../inputs/UserCreateOrConnectWithoutRecipeInput";
import { UserCreateWithoutRecipeInput } from "../inputs/UserCreateWithoutRecipeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutRecipeInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutRecipeInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRecipeInput, {
    nullable: true
  })
  create?: UserCreateWithoutRecipeInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRecipeInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRecipeInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
