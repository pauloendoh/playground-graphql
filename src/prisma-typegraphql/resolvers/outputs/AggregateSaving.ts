import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingAvgAggregate } from "../outputs/SavingAvgAggregate";
import { SavingCountAggregate } from "../outputs/SavingCountAggregate";
import { SavingMaxAggregate } from "../outputs/SavingMaxAggregate";
import { SavingMinAggregate } from "../outputs/SavingMinAggregate";
import { SavingSumAggregate } from "../outputs/SavingSumAggregate";

@TypeGraphQL.ObjectType("AggregateSaving", {
  isAbstract: true
})
export class AggregateSaving {
  @TypeGraphQL.Field(_type => SavingCountAggregate, {
    nullable: true
  })
  _count!: SavingCountAggregate | null;

  @TypeGraphQL.Field(_type => SavingAvgAggregate, {
    nullable: true
  })
  _avg!: SavingAvgAggregate | null;

  @TypeGraphQL.Field(_type => SavingSumAggregate, {
    nullable: true
  })
  _sum!: SavingSumAggregate | null;

  @TypeGraphQL.Field(_type => SavingMinAggregate, {
    nullable: true
  })
  _min!: SavingMinAggregate | null;

  @TypeGraphQL.Field(_type => SavingMaxAggregate, {
    nullable: true
  })
  _max!: SavingMaxAggregate | null;
}
