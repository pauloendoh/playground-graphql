import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CurrentSavingAvgAggregate", {
  isAbstract: true
})
export class CurrentSavingAvgAggregate {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  value!: Prisma.Decimal | null;
}
