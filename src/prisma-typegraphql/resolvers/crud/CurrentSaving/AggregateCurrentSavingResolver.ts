import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCurrentSavingArgs } from "./args/AggregateCurrentSavingArgs";
import { CurrentSaving } from "../../../models/CurrentSaving";
import { AggregateCurrentSaving } from "../../outputs/AggregateCurrentSaving";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CurrentSaving)
export class AggregateCurrentSavingResolver {
  @TypeGraphQL.Query(_returns => AggregateCurrentSaving, {
    nullable: false
  })
  async aggregateCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCurrentSavingArgs): Promise<AggregateCurrentSaving> {
    return getPrismaFromContext(ctx).currentSaving.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
