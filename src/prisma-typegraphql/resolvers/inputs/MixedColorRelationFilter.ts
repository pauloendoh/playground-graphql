import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorWhereInput } from "../inputs/MixedColorWhereInput";

@TypeGraphQL.InputType("MixedColorRelationFilter", {
  isAbstract: true
})
export class MixedColorRelationFilter {
  @TypeGraphQL.Field(_type => MixedColorWhereInput, {
    nullable: true
  })
  is?: MixedColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorWhereInput, {
    nullable: true
  })
  isNot?: MixedColorWhereInput | undefined;
}
