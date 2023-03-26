import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ColorProportionCreateInput } from "../../../inputs/ColorProportionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneColorProportionArgs {
  @TypeGraphQL.Field(_type => ColorProportionCreateInput, {
    nullable: false
  })
  data!: ColorProportionCreateInput;
}
