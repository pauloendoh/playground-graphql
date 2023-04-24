import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorScalarWhereInput } from "../inputs/NhAuthorScalarWhereInput";
import { NhAuthorUpdateManyMutationInput } from "../inputs/NhAuthorUpdateManyMutationInput";

@TypeGraphQL.InputType("NhAuthorUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class NhAuthorUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => NhAuthorScalarWhereInput, {
    nullable: false
  })
  where!: NhAuthorScalarWhereInput;

  @TypeGraphQL.Field(_type => NhAuthorUpdateManyMutationInput, {
    nullable: false
  })
  data!: NhAuthorUpdateManyMutationInput;
}
