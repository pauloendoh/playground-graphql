import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrentSavingOrderByWithAggregationInput } from "../../../inputs/CurrentSavingOrderByWithAggregationInput";
import { CurrentSavingScalarWhereWithAggregatesInput } from "../../../inputs/CurrentSavingScalarWhereWithAggregatesInput";
import { CurrentSavingWhereInput } from "../../../inputs/CurrentSavingWhereInput";
import { CurrentSavingScalarFieldEnum } from "../../../../enums/CurrentSavingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCurrentSavingArgs {
  @TypeGraphQL.Field(_type => CurrentSavingWhereInput, {
    nullable: true
  })
  where?: CurrentSavingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CurrentSavingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "value" | "date" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => CurrentSavingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CurrentSavingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
