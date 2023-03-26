import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCreateOrConnectWithoutColorProportionsInput } from "../inputs/RawColorCreateOrConnectWithoutColorProportionsInput";
import { RawColorCreateWithoutColorProportionsInput } from "../inputs/RawColorCreateWithoutColorProportionsInput";
import { RawColorWhereUniqueInput } from "../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.InputType("RawColorCreateNestedOneWithoutColorProportionsInput", {
  isAbstract: true
})
export class RawColorCreateNestedOneWithoutColorProportionsInput {
  @TypeGraphQL.Field(_type => RawColorCreateWithoutColorProportionsInput, {
    nullable: true
  })
  create?: RawColorCreateWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => RawColorCreateOrConnectWithoutColorProportionsInput, {
    nullable: true
  })
  connectOrCreate?: RawColorCreateOrConnectWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => RawColorWhereUniqueInput, {
    nullable: true
  })
  connect?: RawColorWhereUniqueInput | undefined;
}
