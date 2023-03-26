import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorWhereInput } from "../inputs/RawColorWhereInput";

@TypeGraphQL.InputType("RawColorRelationFilter", {
  isAbstract: true
})
export class RawColorRelationFilter {
  @TypeGraphQL.Field(_type => RawColorWhereInput, {
    nullable: true
  })
  is?: RawColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => RawColorWhereInput, {
    nullable: true
  })
  isNot?: RawColorWhereInput | undefined;
}
