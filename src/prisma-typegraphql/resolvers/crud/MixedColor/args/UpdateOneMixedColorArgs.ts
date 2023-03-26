import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MixedColorUpdateInput } from "../../../inputs/MixedColorUpdateInput";
import { MixedColorWhereUniqueInput } from "../../../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMixedColorArgs {
  @TypeGraphQL.Field(_type => MixedColorUpdateInput, {
    nullable: false
  })
  data!: MixedColorUpdateInput;

  @TypeGraphQL.Field(_type => MixedColorWhereUniqueInput, {
    nullable: false
  })
  where!: MixedColorWhereUniqueInput;
}
