import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ColorProportionUpdateInput } from "../../../inputs/ColorProportionUpdateInput";
import { ColorProportionWhereUniqueInput } from "../../../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneColorProportionArgs {
  @TypeGraphQL.Field(_type => ColorProportionUpdateInput, {
    nullable: false
  })
  data!: ColorProportionUpdateInput;

  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;
}
