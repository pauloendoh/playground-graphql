import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrentSavingCreateInput } from "../../../inputs/CurrentSavingCreateInput";
import { CurrentSavingUpdateInput } from "../../../inputs/CurrentSavingUpdateInput";
import { CurrentSavingWhereUniqueInput } from "../../../inputs/CurrentSavingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCurrentSavingArgs {
  @TypeGraphQL.Field(_type => CurrentSavingWhereUniqueInput, {
    nullable: false
  })
  where!: CurrentSavingWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrentSavingCreateInput, {
    nullable: false
  })
  create!: CurrentSavingCreateInput;

  @TypeGraphQL.Field(_type => CurrentSavingUpdateInput, {
    nullable: false
  })
  update!: CurrentSavingUpdateInput;
}
