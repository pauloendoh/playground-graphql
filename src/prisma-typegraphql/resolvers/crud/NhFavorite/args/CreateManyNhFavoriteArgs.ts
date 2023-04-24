import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhFavoriteCreateManyInput } from "../../../inputs/NhFavoriteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNhFavoriteArgs {
  @TypeGraphQL.Field(_type => [NhFavoriteCreateManyInput], {
    nullable: false
  })
  data!: NhFavoriteCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
