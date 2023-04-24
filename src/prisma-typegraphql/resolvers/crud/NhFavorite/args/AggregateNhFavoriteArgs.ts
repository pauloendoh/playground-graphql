import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhFavoriteOrderByWithRelationInput } from "../../../inputs/NhFavoriteOrderByWithRelationInput";
import { NhFavoriteWhereInput } from "../../../inputs/NhFavoriteWhereInput";
import { NhFavoriteWhereUniqueInput } from "../../../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNhFavoriteArgs {
  @TypeGraphQL.Field(_type => NhFavoriteWhereInput, {
    nullable: true
  })
  where?: NhFavoriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NhFavoriteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteWhereUniqueInput, {
    nullable: true
  })
  cursor?: NhFavoriteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
