import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RawColorOrderByWithAggregationInput } from "../../../inputs/RawColorOrderByWithAggregationInput";
import { RawColorScalarWhereWithAggregatesInput } from "../../../inputs/RawColorScalarWhereWithAggregatesInput";
import { RawColorWhereInput } from "../../../inputs/RawColorWhereInput";
import { RawColorScalarFieldEnum } from "../../../../enums/RawColorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRawColorArgs {
  @TypeGraphQL.Field(_type => RawColorWhereInput, {
    nullable: true
  })
  where?: RawColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RawColorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RawColorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RawColorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "name" | "color" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => RawColorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RawColorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
