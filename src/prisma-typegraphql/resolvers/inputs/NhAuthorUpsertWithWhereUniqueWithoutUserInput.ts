import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateWithoutUserInput } from "../inputs/NhAuthorCreateWithoutUserInput";
import { NhAuthorUpdateWithoutUserInput } from "../inputs/NhAuthorUpdateWithoutUserInput";
import { NhAuthorWhereUniqueInput } from "../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.InputType("NhAuthorUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class NhAuthorUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: NhAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhAuthorUpdateWithoutUserInput, {
    nullable: false
  })
  update!: NhAuthorUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => NhAuthorCreateWithoutUserInput, {
    nullable: false
  })
  create!: NhAuthorCreateWithoutUserInput;
}
