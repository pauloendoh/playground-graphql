import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RawColorUpdateManyMutationInput } from "../../../inputs/RawColorUpdateManyMutationInput";
import { RawColorWhereInput } from "../../../inputs/RawColorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRawColorArgs {
  @TypeGraphQL.Field(_type => RawColorUpdateManyMutationInput, {
    nullable: false
  })
  data!: RawColorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RawColorWhereInput, {
    nullable: true
  })
  where?: RawColorWhereInput | undefined;
}
