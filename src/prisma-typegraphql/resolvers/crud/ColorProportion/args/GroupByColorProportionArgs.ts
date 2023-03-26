import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ColorProportionOrderByWithAggregationInput } from "../../../inputs/ColorProportionOrderByWithAggregationInput";
import { ColorProportionScalarWhereWithAggregatesInput } from "../../../inputs/ColorProportionScalarWhereWithAggregatesInput";
import { ColorProportionWhereInput } from "../../../inputs/ColorProportionWhereInput";
import { ColorProportionScalarFieldEnum } from "../../../../enums/ColorProportionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByColorProportionArgs {
  @TypeGraphQL.Field(_type => ColorProportionWhereInput, {
    nullable: true
  })
  where?: ColorProportionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ColorProportionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "mixedColorId" | "rawColorId" | "proportion" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ColorProportionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ColorProportionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
