import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RawColorWhereUniqueInput } from "../../../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneRawColorArgs {
  @TypeGraphQL.Field(_type => RawColorWhereUniqueInput, {
    nullable: false
  })
  where!: RawColorWhereUniqueInput;
}
