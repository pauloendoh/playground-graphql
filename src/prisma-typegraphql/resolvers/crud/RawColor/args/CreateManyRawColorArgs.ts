import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RawColorCreateManyInput } from "../../../inputs/RawColorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRawColorArgs {
  @TypeGraphQL.Field(_type => [RawColorCreateManyInput], {
    nullable: false
  })
  data!: RawColorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
