import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCreateWithoutColorProportionsInput } from "../inputs/RawColorCreateWithoutColorProportionsInput";
import { RawColorWhereUniqueInput } from "../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.InputType("RawColorCreateOrConnectWithoutColorProportionsInput", {
  isAbstract: true
})
export class RawColorCreateOrConnectWithoutColorProportionsInput {
  @TypeGraphQL.Field(_type => RawColorWhereUniqueInput, {
    nullable: false
  })
  where!: RawColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => RawColorCreateWithoutColorProportionsInput, {
    nullable: false
  })
  create!: RawColorCreateWithoutColorProportionsInput;
}
