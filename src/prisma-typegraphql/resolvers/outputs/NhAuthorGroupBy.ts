import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhAuthorCountAggregate } from "../outputs/NhAuthorCountAggregate";
import { NhAuthorMaxAggregate } from "../outputs/NhAuthorMaxAggregate";
import { NhAuthorMinAggregate } from "../outputs/NhAuthorMinAggregate";

@TypeGraphQL.ObjectType("NhAuthorGroupBy", {
  isAbstract: true
})
export class NhAuthorGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  checkedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
