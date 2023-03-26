import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCreateWithoutUserInput } from "../inputs/RawColorCreateWithoutUserInput";
import { RawColorUpdateWithoutUserInput } from "../inputs/RawColorUpdateWithoutUserInput";
import { RawColorWhereUniqueInput } from "../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.InputType("RawColorUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class RawColorUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => RawColorWhereUniqueInput, {
    nullable: false
  })
  where!: RawColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => RawColorUpdateWithoutUserInput, {
    nullable: false
  })
  update!: RawColorUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => RawColorCreateWithoutUserInput, {
    nullable: false
  })
  create!: RawColorCreateWithoutUserInput;
}
