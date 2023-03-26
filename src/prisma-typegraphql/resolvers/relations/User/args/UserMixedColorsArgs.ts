import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MixedColorOrderByWithRelationInput } from "../../../inputs/MixedColorOrderByWithRelationInput";
import { MixedColorWhereInput } from "../../../inputs/MixedColorWhereInput";
import { MixedColorWhereUniqueInput } from "../../../inputs/MixedColorWhereUniqueInput";
import { MixedColorScalarFieldEnum } from "../../../../enums/MixedColorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserMixedColorsArgs {
  @TypeGraphQL.Field(_type => MixedColorWhereInput, {
    nullable: true
  })
  where?: MixedColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MixedColorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MixedColorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MixedColorWhereUniqueInput, {
    nullable: true
  })
  cursor?: MixedColorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MixedColorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "name" | "color" | "createdAt" | "updatedAt"> | undefined;
}
