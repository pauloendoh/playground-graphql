import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RawColorOrderByWithRelationInput } from "../../../inputs/RawColorOrderByWithRelationInput";
import { RawColorWhereInput } from "../../../inputs/RawColorWhereInput";
import { RawColorWhereUniqueInput } from "../../../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRawColorArgs {
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
}
