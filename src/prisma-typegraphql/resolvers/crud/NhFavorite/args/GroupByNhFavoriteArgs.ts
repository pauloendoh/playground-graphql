import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhFavoriteOrderByWithAggregationInput } from "../../../inputs/NhFavoriteOrderByWithAggregationInput";
import { NhFavoriteScalarWhereWithAggregatesInput } from "../../../inputs/NhFavoriteScalarWhereWithAggregatesInput";
import { NhFavoriteWhereInput } from "../../../inputs/NhFavoriteWhereInput";
import { NhFavoriteScalarFieldEnum } from "../../../../enums/NhFavoriteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNhFavoriteArgs {
  @TypeGraphQL.Field(_type => NhFavoriteWhereInput, {
    nullable: true
  })
  where?: NhFavoriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NhFavoriteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"url" | "authorUrl" | "userId">;

  @TypeGraphQL.Field(_type => NhFavoriteScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NhFavoriteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
