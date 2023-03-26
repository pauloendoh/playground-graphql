import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstColorProportionOrThrowArgs } from "./args/FindFirstColorProportionOrThrowArgs";
import { ColorProportion } from "../../../models/ColorProportion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ColorProportion)
export class FindFirstColorProportionOrThrowResolver {
  @TypeGraphQL.Query(_returns => ColorProportion, {
    nullable: true
  })
  async findFirstColorProportionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstColorProportionOrThrowArgs): Promise<ColorProportion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
