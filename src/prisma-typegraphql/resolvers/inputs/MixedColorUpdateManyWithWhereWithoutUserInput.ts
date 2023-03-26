import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorScalarWhereInput } from "../inputs/MixedColorScalarWhereInput";
import { MixedColorUpdateManyMutationInput } from "../inputs/MixedColorUpdateManyMutationInput";

@TypeGraphQL.InputType("MixedColorUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class MixedColorUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => MixedColorScalarWhereInput, {
    nullable: false
  })
  where!: MixedColorScalarWhereInput;

  @TypeGraphQL.Field(_type => MixedColorUpdateManyMutationInput, {
    nullable: false
  })
  data!: MixedColorUpdateManyMutationInput;
}
