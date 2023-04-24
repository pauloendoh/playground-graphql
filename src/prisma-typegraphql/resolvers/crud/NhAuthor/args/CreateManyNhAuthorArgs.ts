import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhAuthorCreateManyInput } from "../../../inputs/NhAuthorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNhAuthorArgs {
  @TypeGraphQL.Field(_type => [NhAuthorCreateManyInput], {
    nullable: false
  })
  data!: NhAuthorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
