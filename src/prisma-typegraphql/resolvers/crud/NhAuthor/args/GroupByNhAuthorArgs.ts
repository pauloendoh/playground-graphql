import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhAuthorOrderByWithAggregationInput } from "../../../inputs/NhAuthorOrderByWithAggregationInput";
import { NhAuthorScalarWhereWithAggregatesInput } from "../../../inputs/NhAuthorScalarWhereWithAggregatesInput";
import { NhAuthorWhereInput } from "../../../inputs/NhAuthorWhereInput";
import { NhAuthorScalarFieldEnum } from "../../../../enums/NhAuthorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNhAuthorArgs {
  @TypeGraphQL.Field(_type => NhAuthorWhereInput, {
    nullable: true
  })
  where?: NhAuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NhAuthorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"url" | "userId" | "checkedAt" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => NhAuthorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NhAuthorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
