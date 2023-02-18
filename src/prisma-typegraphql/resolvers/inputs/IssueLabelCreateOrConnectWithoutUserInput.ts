import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateWithoutUserInput } from "../inputs/IssueLabelCreateWithoutUserInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class IssueLabelCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelCreateWithoutUserInput, {
    nullable: false
  })
  create!: IssueLabelCreateWithoutUserInput;
}
