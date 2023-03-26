import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MixedColorOrderByWithAggregationInput } from "../../../inputs/MixedColorOrderByWithAggregationInput";
import { MixedColorScalarWhereWithAggregatesInput } from "../../../inputs/MixedColorScalarWhereWithAggregatesInput";
import { MixedColorWhereInput } from "../../../inputs/MixedColorWhereInput";
import { MixedColorScalarFieldEnum } from "../../../../enums/MixedColorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMixedColorArgs {
  @TypeGraphQL.Field(_type => MixedColorWhereInput, {
    nullable: true
  })
  where?: MixedColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MixedColorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MixedColorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MixedColorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "name" | "color" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => MixedColorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MixedColorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
