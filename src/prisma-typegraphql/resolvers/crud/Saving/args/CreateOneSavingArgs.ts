import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavingCreateInput } from "../../../inputs/SavingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSavingArgs {
  @TypeGraphQL.Field(_type => SavingCreateInput, {
    nullable: false
  })
  data!: SavingCreateInput;
}
