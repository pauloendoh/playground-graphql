import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavingUpdateManyMutationInput } from "../../../inputs/SavingUpdateManyMutationInput";
import { SavingWhereInput } from "../../../inputs/SavingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySavingArgs {
  @TypeGraphQL.Field(_type => SavingUpdateManyMutationInput, {
    nullable: false
  })
  data!: SavingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SavingWhereInput, {
    nullable: true
  })
  where?: SavingWhereInput | undefined;
}
