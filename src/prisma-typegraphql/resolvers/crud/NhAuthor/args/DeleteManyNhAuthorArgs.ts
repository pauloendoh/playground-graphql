import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhAuthorWhereInput } from "../../../inputs/NhAuthorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNhAuthorArgs {
  @TypeGraphQL.Field(_type => NhAuthorWhereInput, {
    nullable: true
  })
  where?: NhAuthorWhereInput | undefined;
}
