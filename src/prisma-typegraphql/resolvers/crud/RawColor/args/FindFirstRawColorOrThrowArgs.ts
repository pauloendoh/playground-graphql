import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RawColorOrderByWithRelationInput } from "../../../inputs/RawColorOrderByWithRelationInput";
import { RawColorWhereInput } from "../../../inputs/RawColorWhereInput";
import { RawColorWhereUniqueInput } from "../../../inputs/RawColorWhereUniqueInput";
import { RawColorScalarFieldEnum } from "../../../../enums/RawColorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstRawColorOrThrowArgs {
  @TypeGraphQL.Field(_type => RawColorWhereInput, {
    nullable: true
  })
  where?: RawColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RawColorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RawColorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RawColorWhereUniqueInput, {
    nullable: true
  })
  cursor?: RawColorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RawColorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "name" | "color" | "createdAt" | "updatedAt"> | undefined;
}
