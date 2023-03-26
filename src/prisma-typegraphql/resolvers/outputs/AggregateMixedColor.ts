import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCountAggregate } from "../outputs/MixedColorCountAggregate";
import { MixedColorMaxAggregate } from "../outputs/MixedColorMaxAggregate";
import { MixedColorMinAggregate } from "../outputs/MixedColorMinAggregate";

@TypeGraphQL.ObjectType("AggregateMixedColor", {
  isAbstract: true
})
export class AggregateMixedColor {
  @TypeGraphQL.Field(_type => MixedColorCountAggregate, {
    nullable: true
  })
  _count!: MixedColorCountAggregate | null;

  @TypeGraphQL.Field(_type => MixedColorMinAggregate, {
    nullable: true
  })
  _min!: MixedColorMinAggregate | null;

  @TypeGraphQL.Field(_type => MixedColorMaxAggregate, {
    nullable: true
  })
  _max!: MixedColorMaxAggregate | null;
}
