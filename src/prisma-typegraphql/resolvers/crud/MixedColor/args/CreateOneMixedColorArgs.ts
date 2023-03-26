import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MixedColorCreateInput } from "../../../inputs/MixedColorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMixedColorArgs {
  @TypeGraphQL.Field(_type => MixedColorCreateInput, {
    nullable: false
  })
  data!: MixedColorCreateInput;
}
