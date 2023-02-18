import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelUpdateWithoutUserInput } from "../inputs/IssueLabelUpdateWithoutUserInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class IssueLabelUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelUpdateWithoutUserInput, {
    nullable: false
  })
  data!: IssueLabelUpdateWithoutUserInput;
}
