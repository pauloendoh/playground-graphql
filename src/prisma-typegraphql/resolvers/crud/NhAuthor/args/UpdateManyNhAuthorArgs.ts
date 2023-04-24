import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhAuthorUpdateManyMutationInput } from "../../../inputs/NhAuthorUpdateManyMutationInput";
import { NhAuthorWhereInput } from "../../../inputs/NhAuthorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNhAuthorArgs {
  @TypeGraphQL.Field(_type => NhAuthorUpdateManyMutationInput, {
    nullable: false
  })
  data!: NhAuthorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NhAuthorWhereInput, {
    nullable: true
  })
  where?: NhAuthorWhereInput | undefined;
}
