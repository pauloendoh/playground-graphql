import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MixedColorCreateManyInput } from "../../../inputs/MixedColorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMixedColorArgs {
  @TypeGraphQL.Field(_type => [MixedColorCreateManyInput], {
    nullable: false
  })
  data!: MixedColorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
