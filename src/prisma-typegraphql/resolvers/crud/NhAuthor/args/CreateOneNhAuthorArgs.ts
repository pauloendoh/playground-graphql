import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhAuthorCreateInput } from "../../../inputs/NhAuthorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNhAuthorArgs {
  @TypeGraphQL.Field(_type => NhAuthorCreateInput, {
    nullable: false
  })
  data!: NhAuthorCreateInput;
}
