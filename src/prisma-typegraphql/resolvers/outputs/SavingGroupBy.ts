import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingAvgAggregate } from "../outputs/SavingAvgAggregate";
import { SavingCountAggregate } from "../outputs/SavingCountAggregate";
import { SavingMaxAggregate } from "../outputs/SavingMaxAggregate";
import { SavingMinAggregate } from "../outputs/SavingMinAggregate";
import { SavingSumAggregate } from "../outputs/SavingSumAggregate";

@TypeGraphQL.ObjectType("SavingGroupBy", {
  isAbstract: true
})
export class SavingGroupBy {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  selectedAsAverageMonthlyGrowth!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
