import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CurrentSavingSumAggregate", {
  isAbstract: true
})
export class CurrentSavingSumAggregate {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  value!: Prisma.Decimal | null;
}
