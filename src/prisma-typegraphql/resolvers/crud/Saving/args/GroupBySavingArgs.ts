import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavingOrderByWithAggregationInput } from "../../../inputs/SavingOrderByWithAggregationInput";
import { SavingScalarWhereWithAggregatesInput } from "../../../inputs/SavingScalarWhereWithAggregatesInput";
import { SavingWhereInput } from "../../../inputs/SavingWhereInput";
import { SavingScalarFieldEnum } from "../../../../enums/SavingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySavingArgs {
  @TypeGraphQL.Field(_type => SavingWhereInput, {
    nullable: true
  })
  where?: SavingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SavingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SavingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "value" | "date" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => SavingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SavingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
