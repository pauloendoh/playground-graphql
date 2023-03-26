import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueColorProportionOrThrowArgs } from "./args/FindUniqueColorProportionOrThrowArgs";
import { ColorProportion } from "../../../models/ColorProportion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ColorProportion)
export class FindUniqueColorProportionOrThrowResolver {
  @TypeGraphQL.Query(_returns => ColorProportion, {
    nullable: true
  })
  async getColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueColorProportionOrThrowArgs): Promise<ColorProportion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
