import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRecipeInput } from "../inputs/UserCreateOrConnectWithoutRecipeInput";
import { UserCreateWithoutRecipeInput } from "../inputs/UserCreateWithoutRecipeInput";
import { UserUpdateWithoutRecipeInput } from "../inputs/UserUpdateWithoutRecipeInput";
import { UserUpsertWithoutRecipeInput } from "../inputs/UserUpsertWithoutRecipeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutRecipeNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutRecipeNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRecipeInput, {
    nullable: true
  })
  create?: UserCreateWithoutRecipeInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRecipeInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRecipeInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutRecipeInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutRecipeInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRecipeInput, {
    nullable: true
  })
  update?: UserUpdateWithoutRecipeInput | undefined;
}
