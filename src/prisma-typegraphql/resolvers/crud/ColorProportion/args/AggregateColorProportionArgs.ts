import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ColorProportionOrderByWithRelationInput } from "../../../inputs/ColorProportionOrderByWithRelationInput";
import { ColorProportionWhereInput } from "../../../inputs/ColorProportionWhereInput";
import { ColorProportionWhereUniqueInput } from "../../../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateColorProportionArgs {
  @TypeGraphQL.Field(_type => ColorProportionWhereInput, {
    nullable: true
  })
  where?: ColorProportionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ColorProportionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ColorProportionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: true
  })
  cursor?: ColorProportionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
