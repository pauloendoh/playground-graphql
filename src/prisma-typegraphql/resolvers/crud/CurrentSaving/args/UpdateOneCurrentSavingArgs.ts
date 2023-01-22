import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrentSavingUpdateInput } from "../../../inputs/CurrentSavingUpdateInput";
import { CurrentSavingWhereUniqueInput } from "../../../inputs/CurrentSavingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCurrentSavingArgs {
  @TypeGraphQL.Field(_type => CurrentSavingUpdateInput, {
    nullable: false
  })
  data!: CurrentSavingUpdateInput;

  @TypeGraphQL.Field(_type => CurrentSavingWhereUniqueInput, {
    nullable: false
  })
  where!: CurrentSavingWhereUniqueInput;
}
