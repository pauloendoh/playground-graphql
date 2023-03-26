import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RawColorCreateInput } from "../../../inputs/RawColorCreateInput";
import { RawColorUpdateInput } from "../../../inputs/RawColorUpdateInput";
import { RawColorWhereUniqueInput } from "../../../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRawColorArgs {
  @TypeGraphQL.Field(_type => RawColorWhereUniqueInput, {
    nullable: false
  })
  where!: RawColorWhereUniqueInput;

  @TypeGraphQL.Field(_type => RawColorCreateInput, {
    nullable: false
  })
  create!: RawColorCreateInput;

  @TypeGraphQL.Field(_type => RawColorUpdateInput, {
    nullable: false
  })
  update!: RawColorUpdateInput;
}
