import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateNestedManyWithoutIssuesInput } from "../inputs/IssueLabelCreateNestedManyWithoutIssuesInput";

@TypeGraphQL.InputType("IssueCreateWithoutUserInput", {
  isAbstract: true
})
export class IssueCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  solvedPosition?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  solution!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isSolved?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  solvedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  frequency?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  intensity?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => IssueLabelCreateNestedManyWithoutIssuesInput, {
    nullable: true
  })
  labels?: IssueLabelCreateNestedManyWithoutIssuesInput | undefined;
}
