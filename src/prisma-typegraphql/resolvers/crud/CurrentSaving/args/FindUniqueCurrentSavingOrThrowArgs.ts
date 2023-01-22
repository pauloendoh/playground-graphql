import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrentSavingWhereUniqueInput } from "../../../inputs/CurrentSavingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCurrentSavingOrThrowArgs {
  @TypeGraphQL.Field(_type => CurrentSavingWhereUniqueInput, {
    nullable: false
  })
  where!: CurrentSavingWhereUniqueInput;
}
