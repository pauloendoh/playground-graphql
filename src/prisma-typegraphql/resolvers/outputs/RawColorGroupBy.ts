import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCountAggregate } from "../outputs/RawColorCountAggregate";
import { RawColorMaxAggregate } from "../outputs/RawColorMaxAggregate";
import { RawColorMinAggregate } from "../outputs/RawColorMinAggregate";

@TypeGraphQL.ObjectType("RawColorGroupBy", {
  isAbstract: true
})
export class RawColorGroupBy {
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
