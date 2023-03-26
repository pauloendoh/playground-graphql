import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RawColorUpdateInput } from "../../../inputs/RawColorUpdateInput";
import { RawColorWhereUniqueInput } from "../../../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRawColorArgs {
  @TypeGraphQL.Field(_type => RawColorUpdateInput, {
    nullable: false
  })
  data!: RawColorUpdateInput;

  @TypeGraphQL.Field(_type => RawColorWhereUniqueInput, {
    nullable: false
  })
  where!: RawColorWhereUniqueInput;
}
