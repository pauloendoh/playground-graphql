import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavingWhereInput } from "../../../inputs/SavingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySavingArgs {
  @TypeGraphQL.Field(_type => SavingWhereInput, {
    nullable: true
  })
  where?: SavingWhereInput | undefined;
}
