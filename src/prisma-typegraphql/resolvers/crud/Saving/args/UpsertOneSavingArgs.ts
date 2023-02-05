import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavingCreateInput } from "../../../inputs/SavingCreateInput";
import { SavingUpdateInput } from "../../../inputs/SavingUpdateInput";
import { SavingWhereUniqueInput } from "../../../inputs/SavingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSavingArgs {
  @TypeGraphQL.Field(_type => SavingWhereUniqueInput, {
    nullable: false
  })
  where!: SavingWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavingCreateInput, {
    nullable: false
  })
  create!: SavingCreateInput;

  @TypeGraphQL.Field(_type => SavingUpdateInput, {
    nullable: false
  })
  update!: SavingUpdateInput;
}
