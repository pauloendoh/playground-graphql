import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCountAggregate } from "../outputs/NhFavoriteCountAggregate";
import { NhFavoriteMaxAggregate } from "../outputs/NhFavoriteMaxAggregate";
import { NhFavoriteMinAggregate } from "../outputs/NhFavoriteMinAggregate";

@TypeGraphQL.ObjectType("NhFavoriteGroupBy", {
  isAbstract: true
})
export class NhFavoriteGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => NhFavoriteCountAggregate, {
    nullable: true
  })
  _count!: NhFavoriteCountAggregate | null;

  @TypeGraphQL.Field(_type => NhFavoriteMinAggregate, {
    nullable: true
  })
  _min!: NhFavoriteMinAggregate | null;

  @TypeGraphQL.Field(_type => NhFavoriteMaxAggregate, {
    nullable: true
  })
  _max!: NhFavoriteMaxAggregate | null;
}
