import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorUpdateWithoutUserInput } from "../inputs/RawColorUpdateWithoutUserInput";
import { RawColorWhereUniqueInput } from "../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.InputType("RawColorUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class RawColorUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => RawColorWhereUniqueInput, {
    nullable: false
  })
  where!: RawColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => RawColorUpdateWithoutUserInput, {
    nullable: false
  })
  data!: RawColorUpdateWithoutUserInput;
}
