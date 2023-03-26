import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MixedColorUpdateManyMutationInput } from "../../../inputs/MixedColorUpdateManyMutationInput";
import { MixedColorWhereInput } from "../../../inputs/MixedColorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMixedColorArgs {
  @TypeGraphQL.Field(_type => MixedColorUpdateManyMutationInput, {
    nullable: false
  })
  data!: MixedColorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MixedColorWhereInput, {
    nullable: true
  })
  where?: MixedColorWhereInput | undefined;
}
