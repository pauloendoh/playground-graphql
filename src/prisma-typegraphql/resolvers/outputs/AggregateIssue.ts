import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCountAggregate } from "../outputs/IssueCountAggregate";
import { IssueMaxAggregate } from "../outputs/IssueMaxAggregate";
import { IssueMinAggregate } from "../outputs/IssueMinAggregate";

@TypeGraphQL.ObjectType("AggregateIssue", {
  isAbstract: true
})
export class AggregateIssue {
  @TypeGraphQL.Field(_type => IssueCountAggregate, {
    nullable: true
  })
  _count!: IssueCountAggregate | null;

  @TypeGraphQL.Field(_type => IssueMinAggregate, {
    nullable: true
  })
  _min!: IssueMinAggregate | null;

  @TypeGraphQL.Field(_type => IssueMaxAggregate, {
    nullable: true
  })
  _max!: IssueMaxAggregate | null;
}
