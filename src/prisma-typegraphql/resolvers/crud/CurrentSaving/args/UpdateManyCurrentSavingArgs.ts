import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrentSavingUpdateManyMutationInput } from "../../../inputs/CurrentSavingUpdateManyMutationInput";
import { CurrentSavingWhereInput } from "../../../inputs/CurrentSavingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCurrentSavingArgs {
  @TypeGraphQL.Field(_type => CurrentSavingUpdateManyMutationInput, {
    nullable: false
  })
  data!: CurrentSavingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CurrentSavingWhereInput, {
    nullable: true
  })
  where?: CurrentSavingWhereInput | undefined;
}
