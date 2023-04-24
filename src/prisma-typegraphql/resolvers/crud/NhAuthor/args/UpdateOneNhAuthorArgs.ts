import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhAuthorUpdateInput } from "../../../inputs/NhAuthorUpdateInput";
import { NhAuthorWhereUniqueInput } from "../../../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNhAuthorArgs {
  @TypeGraphQL.Field(_type => NhAuthorUpdateInput, {
    nullable: false
  })
  data!: NhAuthorUpdateInput;

  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: NhAuthorWhereUniqueInput;
}
