import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RawColorWhereInput } from "../../../inputs/RawColorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRawColorArgs {
  @TypeGraphQL.Field(_type => RawColorWhereInput, {
    nullable: true
  })
  where?: RawColorWhereInput | undefined;
}
