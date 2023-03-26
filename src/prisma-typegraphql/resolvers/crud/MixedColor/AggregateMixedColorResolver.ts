import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMixedColorArgs } from "./args/AggregateMixedColorArgs";
import { MixedColor } from "../../../models/MixedColor";
import { AggregateMixedColor } from "../../outputs/AggregateMixedColor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MixedColor)
export class AggregateMixedColorResolver {
  @TypeGraphQL.Query(_returns => AggregateMixedColor, {
    nullable: false
  })
  async aggregateMixedColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMixedColorArgs): Promise<AggregateMixedColor> {
    return getPrismaFromContext(ctx).mixedColor.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
