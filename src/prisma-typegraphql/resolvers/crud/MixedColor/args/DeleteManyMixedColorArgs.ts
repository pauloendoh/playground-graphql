import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MixedColorWhereInput } from "../../../inputs/MixedColorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMixedColorArgs {
  @TypeGraphQL.Field(_type => MixedColorWhereInput, {
    nullable: true
  })
  where?: MixedColorWhereInput | undefined;
}
