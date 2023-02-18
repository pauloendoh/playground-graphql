import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCountAggregate } from "../outputs/IssueLabelCountAggregate";
import { IssueLabelMaxAggregate } from "../outputs/IssueLabelMaxAggregate";
import { IssueLabelMinAggregate } from "../outputs/IssueLabelMinAggregate";

@TypeGraphQL.ObjectType("IssueLabelGroupBy", {
  isAbstract: true
})
export class IssueLabelGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bgColor!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => IssueLabelCountAggregate, {
    nullable: true
  })
  _count!: IssueLabelCountAggregate | null;

  @TypeGraphQL.Field(_type => IssueLabelMinAggregate, {
    nullable: true
  })
  _min!: IssueLabelMinAggregate | null;

  @TypeGraphQL.Field(_type => IssueLabelMaxAggregate, {
    nullable: true
  })
  _max!: IssueLabelMaxAggregate | null;
}
