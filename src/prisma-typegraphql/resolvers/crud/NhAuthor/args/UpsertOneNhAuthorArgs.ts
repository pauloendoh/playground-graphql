import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhAuthorCreateInput } from "../../../inputs/NhAuthorCreateInput";
import { NhAuthorUpdateInput } from "../../../inputs/NhAuthorUpdateInput";
import { NhAuthorWhereUniqueInput } from "../../../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNhAuthorArgs {
  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: NhAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => NhAuthorCreateInput, {
    nullable: false
  })
  create!: NhAuthorCreateInput;

  @TypeGraphQL.Field(_type => NhAuthorUpdateInput, {
    nullable: false
  })
  update!: NhAuthorUpdateInput;
}
