import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCountAggregate } from "../outputs/MixedColorCountAggregate";
import { MixedColorMaxAggregate } from "../outputs/MixedColorMaxAggregate";
import { MixedColorMinAggregate } from "../outputs/MixedColorMinAggregate";

@TypeGraphQL.ObjectType("MixedColorGroupBy", {
  isAbstract: true
})
export class MixedColorGroupBy {
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
  color!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
