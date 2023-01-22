import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrentSavingOrderByWithRelationInput } from "../../../inputs/CurrentSavingOrderByWithRelationInput";
import { CurrentSavingWhereInput } from "../../../inputs/CurrentSavingWhereInput";
import { CurrentSavingWhereUniqueInput } from "../../../inputs/CurrentSavingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCurrentSavingArgs {
  @TypeGraphQL.Field(_type => CurrentSavingWhereInput, {
    nullable: true
  })
  where?: CurrentSavingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CurrentSavingOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CurrentSavingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingWhereUniqueInput, {
    nullable: true
  })
  cursor?: CurrentSavingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
