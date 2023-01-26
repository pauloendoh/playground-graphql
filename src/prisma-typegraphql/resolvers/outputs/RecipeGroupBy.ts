import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RecipeAvgAggregate } from "../outputs/RecipeAvgAggregate";
import { RecipeCountAggregate } from "../outputs/RecipeCountAggregate";
import { RecipeMaxAggregate } from "../outputs/RecipeMaxAggregate";
import { RecipeMinAggregate } from "../outputs/RecipeMinAggregate";
import { RecipeSumAggregate } from "../outputs/RecipeSumAggregate";

@TypeGraphQL.ObjectType("RecipeGroupBy", {
  isAbstract: true
})
export class RecipeGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rating!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  savedPosition!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => RecipeCountAggregate, {
    nullable: true
  })
  _count!: RecipeCountAggregate | null;

  @TypeGraphQL.Field(_type => RecipeAvgAggregate, {
    nullable: true
  })
  _avg!: RecipeAvgAggregate | null;

  @TypeGraphQL.Field(_type => RecipeSumAggregate, {
    nullable: true
  })
  _sum!: RecipeSumAggregate | null;

  @TypeGraphQL.Field(_type => RecipeMinAggregate, {
    nullable: true
  })
  _min!: RecipeMinAggregate | null;

  @TypeGraphQL.Field(_type => RecipeMaxAggregate, {
    nullable: true
  })
  _max!: RecipeMaxAggregate | null;
}
