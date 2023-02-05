import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingScalarWhereInput } from "../inputs/SavingScalarWhereInput";
import { SavingUpdateManyMutationInput } from "../inputs/SavingUpdateManyMutationInput";

@TypeGraphQL.InputType("SavingUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class SavingUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => SavingScalarWhereInput, {
    nullable: false
  })
  where!: SavingScalarWhereInput;

  @TypeGraphQL.Field(_type => SavingUpdateManyMutationInput, {
    nullable: false
  })
  data!: SavingUpdateManyMutationInput;
}
