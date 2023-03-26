import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MixedColorOrderByWithRelationInput } from "../../../inputs/MixedColorOrderByWithRelationInput";
import { MixedColorWhereInput } from "../../../inputs/MixedColorWhereInput";
import { MixedColorWhereUniqueInput } from "../../../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMixedColorArgs {
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
}
