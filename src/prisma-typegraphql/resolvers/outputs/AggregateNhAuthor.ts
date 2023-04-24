import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCountAggregate } from "../outputs/NhAuthorCountAggregate";
import { NhAuthorMaxAggregate } from "../outputs/NhAuthorMaxAggregate";
import { NhAuthorMinAggregate } from "../outputs/NhAuthorMinAggregate";

@TypeGraphQL.ObjectType("AggregateNhAuthor", {
  isAbstract: true
})
export class AggregateNhAuthor {
  @TypeGraphQL.Field(_type => NhAuthorCountAggregate, {
    nullable: true
  })
  _count!: NhAuthorCountAggregate | null;

  @TypeGraphQL.Field(_type => NhAuthorMinAggregate, {
    nullable: true
  })
  _min!: NhAuthorMinAggregate | null;

  @TypeGraphQL.Field(_type => NhAuthorMaxAggregate, {
    nullable: true
  })
  _max!: NhAuthorMaxAggregate | null;
}
