import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseAvgAggregate } from "../outputs/ExpenseAvgAggregate";
import { ExpenseCountAggregate } from "../outputs/ExpenseCountAggregate";
import { ExpenseMaxAggregate } from "../outputs/ExpenseMaxAggregate";
import { ExpenseMinAggregate } from "../outputs/ExpenseMinAggregate";
import { ExpenseSumAggregate } from "../outputs/ExpenseSumAggregate";

@TypeGraphQL.ObjectType("ExpenseGroupBy", {
  isAbstract: true
})
export class ExpenseGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  value!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rating!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => ExpenseCountAggregate, {
    nullable: true
  })
  _count!: ExpenseCountAggregate | null;

  @TypeGraphQL.Field(_type => ExpenseAvgAggregate, {
    nullable: true
  })
  _avg!: ExpenseAvgAggregate | null;

  @TypeGraphQL.Field(_type => ExpenseSumAggregate, {
    nullable: true
  })
  _sum!: ExpenseSumAggregate | null;

  @TypeGraphQL.Field(_type => ExpenseMinAggregate, {
    nullable: true
  })
  _min!: ExpenseMinAggregate | null;

  @TypeGraphQL.Field(_type => ExpenseMaxAggregate, {
    nullable: true
  })
  _max!: ExpenseMaxAggregate | null;
}
