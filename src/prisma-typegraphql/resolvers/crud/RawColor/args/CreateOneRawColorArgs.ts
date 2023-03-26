import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RawColorCreateInput } from "../../../inputs/RawColorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRawColorArgs {
  @TypeGraphQL.Field(_type => RawColorCreateInput, {
    nullable: false
  })
  data!: RawColorCreateInput;
}
