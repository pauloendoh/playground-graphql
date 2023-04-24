import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorUpdateWithoutUserInput } from "../inputs/NhAuthorUpdateWithoutUserInput";
import { NhAuthorWhereUniqueInput } from "../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.InputType("NhAuthorUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class NhAuthorUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: NhAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhAuthorUpdateWithoutUserInput, {
    nullable: false
  })
  data!: NhAuthorUpdateWithoutUserInput;
}
