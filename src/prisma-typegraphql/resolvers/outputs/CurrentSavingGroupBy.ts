import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingAvgAggregate } from "../outputs/CurrentSavingAvgAggregate";
import { CurrentSavingCountAggregate } from "../outputs/CurrentSavingCountAggregate";
import { CurrentSavingMaxAggregate } from "../outputs/CurrentSavingMaxAggregate";
import { CurrentSavingMinAggregate } from "../outputs/CurrentSavingMinAggregate";
import { CurrentSavingSumAggregate } from "../outputs/CurrentSavingSumAggregate";

@TypeGraphQL.ObjectType("CurrentSavingGroupBy", {
  isAbstract: true
})
export class CurrentSavingGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  value!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
