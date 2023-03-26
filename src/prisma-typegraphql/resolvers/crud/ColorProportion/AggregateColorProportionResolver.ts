import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateColorProportionArgs } from "./args/AggregateColorProportionArgs";
import { ColorProportion } from "../../../models/ColorProportion";
import { AggregateColorProportion } from "../../outputs/AggregateColorProportion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ColorProportion)
export class AggregateColorProportionResolver {
  @TypeGraphQL.Query(_returns => AggregateColorProportion, {
    nullable: false
  })
  async aggregateColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateColorProportionArgs): Promise<AggregateColorProportion> {
    return getPrismaFromContext(ctx).colorProportion.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
