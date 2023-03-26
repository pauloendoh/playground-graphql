import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorWhereInput } from "../inputs/RawColorWhereInput";

@TypeGraphQL.InputType("RawColorListRelationFilter", {
  isAbstract: true
})
export class RawColorListRelationFilter {
  @TypeGraphQL.Field(_type => RawColorWhereInput, {
    nullable: true
  })
  every?: RawColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => RawColorWhereInput, {
    nullable: true
  })
  some?: RawColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => RawColorWhereInput, {
    nullable: true
  })
  none?: RawColorWhereInput | undefined;
}
