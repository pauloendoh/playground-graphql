import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ColorProportionCreateInput } from "../../../inputs/ColorProportionCreateInput";
import { ColorProportionUpdateInput } from "../../../inputs/ColorProportionUpdateInput";
import { ColorProportionWhereUniqueInput } from "../../../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneColorProportionArgs {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ColorProportionCreateInput, {
    nullable: false
  })
  create!: ColorProportionCreateInput;

  @TypeGraphQL.Field(_type => ColorProportionUpdateInput, {
    nullable: false
  })
  update!: ColorProportionUpdateInput;
}
