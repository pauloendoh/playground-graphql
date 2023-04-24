import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCreateManyUserInputEnvelope } from "../inputs/NhAuthorCreateManyUserInputEnvelope";
import { NhAuthorCreateOrConnectWithoutUserInput } from "../inputs/NhAuthorCreateOrConnectWithoutUserInput";
import { NhAuthorCreateWithoutUserInput } from "../inputs/NhAuthorCreateWithoutUserInput";
import { NhAuthorWhereUniqueInput } from "../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.InputType("NhAuthorCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class NhAuthorCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [NhAuthorCreateWithoutUserInput], {
    nullable: true
  })
  create?: NhAuthorCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: NhAuthorCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => NhAuthorCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: NhAuthorCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorWhereUniqueInput], {
    nullable: true
  })
  connect?: NhAuthorWhereUniqueInput[] | undefined;
}
