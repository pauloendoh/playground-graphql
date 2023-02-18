import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelScalarWhereInput } from "../inputs/IssueLabelScalarWhereInput";
import { IssueLabelUpdateManyMutationInput } from "../inputs/IssueLabelUpdateManyMutationInput";

@TypeGraphQL.InputType("IssueLabelUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class IssueLabelUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => IssueLabelScalarWhereInput, {
    nullable: false
  })
  where!: IssueLabelScalarWhereInput;

  @TypeGraphQL.Field(_type => IssueLabelUpdateManyMutationInput, {
    nullable: false
  })
  data!: IssueLabelUpdateManyMutationInput;
}
