import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateOrConnectWithoutIssuesInput } from "../inputs/IssueLabelCreateOrConnectWithoutIssuesInput";
import { IssueLabelCreateWithoutIssuesInput } from "../inputs/IssueLabelCreateWithoutIssuesInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelCreateNestedManyWithoutIssuesInput", {
  isAbstract: true
})
export class IssueLabelCreateNestedManyWithoutIssuesInput {
  @TypeGraphQL.Field(_type => [IssueLabelCreateWithoutIssuesInput], {
    nullable: true
  })
  create?: IssueLabelCreateWithoutIssuesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutIssuesInput], {
    nullable: true
  })
  connectOrCreate?: IssueLabelCreateOrConnectWithoutIssuesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueLabelWhereUniqueInput[] | undefined;
}
