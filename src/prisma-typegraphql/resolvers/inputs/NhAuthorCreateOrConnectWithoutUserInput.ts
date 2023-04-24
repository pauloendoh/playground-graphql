import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateWithoutUserInput } from "../inputs/NhAuthorCreateWithoutUserInput";
import { NhAuthorWhereUniqueInput } from "../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.InputType("NhAuthorCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class NhAuthorCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: NhAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhAuthorCreateWithoutUserInput, {
    nullable: false
  })
  create!: NhAuthorCreateWithoutUserInput;
}
