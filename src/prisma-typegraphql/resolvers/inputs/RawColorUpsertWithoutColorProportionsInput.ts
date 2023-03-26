import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCreateWithoutColorProportionsInput } from "../inputs/RawColorCreateWithoutColorProportionsInput";
import { RawColorUpdateWithoutColorProportionsInput } from "../inputs/RawColorUpdateWithoutColorProportionsInput";

@TypeGraphQL.InputType("RawColorUpsertWithoutColorProportionsInput", {
  isAbstract: true
})
export class RawColorUpsertWithoutColorProportionsInput {
  @TypeGraphQL.Field(_type => RawColorUpdateWithoutColorProportionsInput, {
    nullable: false
  })
  update!: RawColorUpdateWithoutColorProportionsInput;

  @TypeGraphQL.Field(_type => RawColorCreateWithoutColorProportionsInput, {
    nullable: false
  })
  create!: RawColorCreateWithoutColorProportionsInput;
}
