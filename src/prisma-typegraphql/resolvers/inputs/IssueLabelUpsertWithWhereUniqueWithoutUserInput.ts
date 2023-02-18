import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateWithoutUserInput } from "../inputs/IssueLabelCreateWithoutUserInput";
import { IssueLabelUpdateWithoutUserInput } from "../inputs/IssueLabelUpdateWithoutUserInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class IssueLabelUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelUpdateWithoutUserInput, {
    nullable: false
  })
  update!: IssueLabelUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => IssueLabelCreateWithoutUserInput, {
    nullable: false
  })
  create!: IssueLabelCreateWithoutUserInput;
}
