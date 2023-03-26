import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MixedColorCreateInput } from "../../../inputs/MixedColorCreateInput";
import { MixedColorUpdateInput } from "../../../inputs/MixedColorUpdateInput";
import { MixedColorWhereUniqueInput } from "../../../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMixedColorArgs {
  @TypeGraphQL.Field(_type => MixedColorWhereUniqueInput, {
    nullable: false
  })
  where!: MixedColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => MixedColorCreateInput, {
    nullable: false
  })
  create!: MixedColorCreateInput;

  @TypeGraphQL.Field(_type => MixedColorUpdateInput, {
    nullable: false
  })
  update!: MixedColorUpdateInput;
}
