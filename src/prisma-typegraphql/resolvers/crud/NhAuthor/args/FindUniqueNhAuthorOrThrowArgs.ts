import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhAuthorWhereUniqueInput } from "../../../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNhAuthorOrThrowArgs {
  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: NhAuthorWhereUniqueInput;
}
