import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutNhAuthorsInput } from "../inputs/UserCreateNestedOneWithoutNhAuthorsInput";

@TypeGraphQL.InputType("NhAuthorCreateWithoutFavoritesInput", {
  isAbstract: true
})
export class NhAuthorCreateWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNhAuthorsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutNhAuthorsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  checkedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
