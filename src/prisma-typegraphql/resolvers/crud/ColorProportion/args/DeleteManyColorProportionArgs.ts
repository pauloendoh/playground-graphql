import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ColorProportionWhereInput } from "../../../inputs/ColorProportionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyColorProportionArgs {
  @TypeGraphQL.Field(_type => ColorProportionWhereInput, {
    nullable: true
  })
  where?: ColorProportionWhereInput | undefined;
}
