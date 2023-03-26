import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneColorProportionArgs } from "./args/UpdateOneColorProportionArgs";
import { ColorProportion } from "../../../models/ColorProportion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ColorProportion)
export class UpdateOneColorProportionResolver {
  @TypeGraphQL.Mutation(_returns => ColorProportion, {
    nullable: true
  })
  async updateOneColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneColorProportionArgs): Promise<ColorProportion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
