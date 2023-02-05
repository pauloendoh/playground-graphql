import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavingWhereUniqueInput } from "../../../inputs/SavingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSavingArgs {
  @TypeGraphQL.Field(_type => SavingWhereUniqueInput, {
    nullable: false
  })
  where!: SavingWhereUniqueInput;
}
