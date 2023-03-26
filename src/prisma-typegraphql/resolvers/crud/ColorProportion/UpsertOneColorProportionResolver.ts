import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneColorProportionArgs } from "./args/UpsertOneColorProportionArgs";
import { ColorProportion } from "../../../models/ColorProportion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ColorProportion)
export class UpsertOneColorProportionResolver {
  @TypeGraphQL.Mutation(_returns => ColorProportion, {
    nullable: false
  })
  async upsertOneColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneColorProportionArgs): Promise<ColorProportion> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
