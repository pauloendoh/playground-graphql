import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingScalarWhereInput } from "../inputs/CurrentSavingScalarWhereInput";
import { CurrentSavingUpdateManyMutationInput } from "../inputs/CurrentSavingUpdateManyMutationInput";

@TypeGraphQL.InputType("CurrentSavingUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class CurrentSavingUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => CurrentSavingScalarWhereInput, {
    nullable: false
  })
  where!: CurrentSavingScalarWhereInput;

  @TypeGraphQL.Field(_type => CurrentSavingUpdateManyMutationInput, {
    nullable: false
  })
  data!: CurrentSavingUpdateManyMutationInput;
}
