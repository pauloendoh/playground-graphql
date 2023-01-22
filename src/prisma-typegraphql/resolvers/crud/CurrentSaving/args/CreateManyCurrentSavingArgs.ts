import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrentSavingCreateManyInput } from "../../../inputs/CurrentSavingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCurrentSavingArgs {
  @TypeGraphQL.Field(_type => [CurrentSavingCreateManyInput], {
    nullable: false
  })
  data!: CurrentSavingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
