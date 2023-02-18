import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateNestedManyWithoutLabelsInput } from "../inputs/IssueCreateNestedManyWithoutLabelsInput";
import { UserCreateNestedOneWithoutIssueLabelsInput } from "../inputs/UserCreateNestedOneWithoutIssueLabelsInput";

@TypeGraphQL.InputType("IssueLabelCreateInput", {
  isAbstract: true
})
export class IssueLabelCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutIssueLabelsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutIssueLabelsInput;

  @TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutLabelsInput, {
    nullable: true
  })
  issues?: IssueCreateNestedManyWithoutLabelsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bgColor!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
