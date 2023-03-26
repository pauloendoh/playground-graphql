import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCreateWithoutUserInput } from "../inputs/RawColorCreateWithoutUserInput";
import { RawColorWhereUniqueInput } from "../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.InputType("RawColorCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class RawColorCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => RawColorWhereUniqueInput, {
    nullable: false
  })
  where!: RawColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => RawColorCreateWithoutUserInput, {
    nullable: false
  })
  create!: RawColorCreateWithoutUserInput;
}
