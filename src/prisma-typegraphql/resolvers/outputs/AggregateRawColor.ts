import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCountAggregate } from "../outputs/RawColorCountAggregate";
import { RawColorMaxAggregate } from "../outputs/RawColorMaxAggregate";
import { RawColorMinAggregate } from "../outputs/RawColorMinAggregate";

@TypeGraphQL.ObjectType("AggregateRawColor", {
  isAbstract: true
})
export class AggregateRawColor {
  @TypeGraphQL.Field(_type => RawColorCountAggregate, {
    nullable: true
  })
  _count!: RawColorCountAggregate | null;

  @TypeGraphQL.Field(_type => RawColorMinAggregate, {
    nullable: true
  })
  _min!: RawColorMinAggregate | null;

  @TypeGraphQL.Field(_type => RawColorMaxAggregate, {
    nullable: true
  })
  _max!: RawColorMaxAggregate | null;
}
