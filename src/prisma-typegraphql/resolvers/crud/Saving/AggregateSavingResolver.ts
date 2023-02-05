import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSavingArgs } from "./args/AggregateSavingArgs";
import { Saving } from "../../../models/Saving";
import { AggregateSaving } from "../../outputs/AggregateSaving";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Saving)
export class AggregateSavingResolver {
  @TypeGraphQL.Query(_returns => AggregateSaving, {
    nullable: false
  })
  async aggregateSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSavingArgs): Promise<AggregateSaving> {
    return getPrismaFromContext(ctx).saving.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
