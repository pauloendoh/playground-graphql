import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalaryCreateManyInput } from "../../../inputs/SalaryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySalaryArgs {
  @TypeGraphQL.Field(_type => [SalaryCreateManyInput], {
    nullable: false
  })
  data!: SalaryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
