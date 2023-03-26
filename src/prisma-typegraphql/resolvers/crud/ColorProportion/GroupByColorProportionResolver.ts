import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByColorProportionArgs } from "./args/GroupByColorProportionArgs";
import { ColorProportion } from "../../../models/ColorProportion";
import { ColorProportionGroupBy } from "../../outputs/ColorProportionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ColorProportion)
export class GroupByColorProportionResolver {
  @TypeGraphQL.Query(_returns => [ColorProportionGroupBy], {
    nullable: false
  })
  async groupByColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByColorProportionArgs): Promise<ColorProportionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
