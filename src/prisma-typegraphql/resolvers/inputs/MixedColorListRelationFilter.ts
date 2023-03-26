import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorWhereInput } from "../inputs/MixedColorWhereInput";

@TypeGraphQL.InputType("MixedColorListRelationFilter", {
  isAbstract: true
})
export class MixedColorListRelationFilter {
  @TypeGraphQL.Field(_type => MixedColorWhereInput, {
    nullable: true
  })
  every?: MixedColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorWhereInput, {
    nullable: true
  })
  some?: MixedColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorWhereInput, {
    nullable: true
  })
  none?: MixedColorWhereInput | undefined;
}
