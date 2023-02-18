import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyUserInputEnvelope } from "../inputs/IssueCreateManyUserInputEnvelope";
import { IssueCreateOrConnectWithoutUserInput } from "../inputs/IssueCreateOrConnectWithoutUserInput";
import { IssueCreateWithoutUserInput } from "../inputs/IssueCreateWithoutUserInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class IssueCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutUserInput], {
    nullable: true
  })
  create?: IssueCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;
}
