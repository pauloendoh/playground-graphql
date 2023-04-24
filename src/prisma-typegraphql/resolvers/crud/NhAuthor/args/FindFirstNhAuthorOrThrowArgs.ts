import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhAuthorOrderByWithRelationInput } from "../../../inputs/NhAuthorOrderByWithRelationInput";
import { NhAuthorWhereInput } from "../../../inputs/NhAuthorWhereInput";
import { NhAuthorWhereUniqueInput } from "../../../inputs/NhAuthorWhereUniqueInput";
import { NhAuthorScalarFieldEnum } from "../../../../enums/NhAuthorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstNhAuthorOrThrowArgs {
  @TypeGraphQL.Field(_type => NhAuthorWhereInput, {
    nullable: true
  })
  where?: NhAuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NhAuthorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: true
  })
  cursor?: NhAuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [NhAuthorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"url" | "userId" | "checkedAt" | "createdAt" | "updatedAt"> | undefined;
}
