import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ColorProportionWhereUniqueInput } from "../../../inputs/ColorProportionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueColorProportionOrThrowArgs {
  @TypeGraphQL.Field(_type => ColorProportionWhereUniqueInput, {
    nullable: false
  })
  where!: ColorProportionWhereUniqueInput;
}
