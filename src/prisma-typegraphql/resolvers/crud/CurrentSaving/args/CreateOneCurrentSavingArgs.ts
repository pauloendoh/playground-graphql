import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrentSavingCreateInput } from "../../../inputs/CurrentSavingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCurrentSavingArgs {
  @TypeGraphQL.Field(_type => CurrentSavingCreateInput, {
    nullable: false
  })
  data!: CurrentSavingCreateInput;
}
