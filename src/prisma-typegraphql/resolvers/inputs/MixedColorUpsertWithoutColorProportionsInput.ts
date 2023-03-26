import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCreateWithoutColorProportionsInput } from "../inputs/MixedColorCreateWithoutColorProportionsInput";
import { MixedColorUpdateWithoutColorProportionsInput } from "../inputs/MixedColorUpdateWithoutColorProportionsInput";

@TypeGraphQL.InputType("MixedColorUpsertWithoutColorProportionsInput", {
  isAbstract: true
})
export class MixedColorUpsertWithoutColorProportionsInput {
  @TypeGraphQL.Field(_type => MixedColorUpdateWithoutColorProportionsInput, {
    nullable: false
  })
  update!: MixedColorUpdateWithoutColorProportionsInput;

  @TypeGraphQL.Field(_type => MixedColorCreateWithoutColorProportionsInput, {
    nullable: false
  })
  create!: MixedColorCreateWithoutColorProportionsInput;
}
