import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorScalarWhereInput } from "../inputs/RawColorScalarWhereInput";
import { RawColorUpdateManyMutationInput } from "../inputs/RawColorUpdateManyMutationInput";

@TypeGraphQL.InputType("RawColorUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class RawColorUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => RawColorScalarWhereInput, {
    nullable: false
  })
  where!: RawColorScalarWhereInput;

  @TypeGraphQL.Field(_type => RawColorUpdateManyMutationInput, {
    nullable: false
  })
  data!: RawColorUpdateManyMutationInput;
}
