import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrentSavingWhereInput } from "../../../inputs/CurrentSavingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCurrentSavingArgs {
  @TypeGraphQL.Field(_type => CurrentSavingWhereInput, {
    nullable: true
  })
  where?: CurrentSavingWhereInput | undefined;
}
