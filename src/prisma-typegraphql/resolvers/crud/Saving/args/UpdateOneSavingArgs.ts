import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavingUpdateInput } from "../../../inputs/SavingUpdateInput";
import { SavingWhereUniqueInput } from "../../../inputs/SavingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSavingArgs {
  @TypeGraphQL.Field(_type => SavingUpdateInput, {
    nullable: false
  })
  data!: SavingUpdateInput;

  @TypeGraphQL.Field(_type => SavingWhereUniqueInput, {
    nullable: false
  })
  where!: SavingWhereUniqueInput;
}
