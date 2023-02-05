import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavingCreateManyInput } from "../../../inputs/SavingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySavingArgs {
  @TypeGraphQL.Field(_type => [SavingCreateManyInput], {
    nullable: false
  })
  data!: SavingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
