import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCountAggregate } from "../outputs/IssueCountAggregate";
import { IssueMaxAggregate } from "../outputs/IssueMaxAggregate";
import { IssueMinAggregate } from "../outputs/IssueMinAggregate";

@TypeGraphQL.ObjectType("IssueGroupBy", {
  isAbstract: true
})
export class IssueGroupBy {
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
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  solution!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isSolved!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
