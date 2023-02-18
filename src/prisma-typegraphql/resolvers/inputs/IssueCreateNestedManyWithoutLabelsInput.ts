import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateOrConnectWithoutLabelsInput } from "../inputs/IssueCreateOrConnectWithoutLabelsInput";
import { IssueCreateWithoutLabelsInput } from "../inputs/IssueCreateWithoutLabelsInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedManyWithoutLabelsInput", {
  isAbstract: true
})
export class IssueCreateNestedManyWithoutLabelsInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutLabelsInput], {
    nullable: true
  })
  create?: IssueCreateWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutLabelsInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutLabelsInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;
}
