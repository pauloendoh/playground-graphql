import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingAvgAggregate } from "../outputs/CurrentSavingAvgAggregate";
import { CurrentSavingCountAggregate } from "../outputs/CurrentSavingCountAggregate";
import { CurrentSavingMaxAggregate } from "../outputs/CurrentSavingMaxAggregate";
import { CurrentSavingMinAggregate } from "../outputs/CurrentSavingMinAggregate";
import { CurrentSavingSumAggregate } from "../outputs/CurrentSavingSumAggregate";

@TypeGraphQL.ObjectType("AggregateCurrentSaving", {
  isAbstract: true
})
export class AggregateCurrentSaving {
  @TypeGraphQL.Field(_type => CurrentSavingCountAggregate, {
    nullable: true
  })
  _count!: CurrentSavingCountAggregate | null;

  @TypeGraphQL.Field(_type => CurrentSavingAvgAggregate, {
    nullable: true
  })
  _avg!: CurrentSavingAvgAggregate | null;

  @TypeGraphQL.Field(_type => CurrentSavingSumAggregate, {
    nullable: true
  })
  _sum!: CurrentSavingSumAggregate | null;

  @TypeGraphQL.Field(_type => CurrentSavingMinAggregate, {
    nullable: true
  })
  _min!: CurrentSavingMinAggregate | null;

  @TypeGraphQL.Field(_type => CurrentSavingMaxAggregate, {
    nullable: true
  })
  _max!: CurrentSavingMaxAggregate | null;
}
