import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMixedColorArgs } from "./args/FindFirstMixedColorArgs";
import { MixedColor } from "../../../models/MixedColor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MixedColor)
export class FindFirstMixedColorResolver {
  @TypeGraphQL.Query(_returns => MixedColor, {
    nullable: true
  })
  async findFirstMixedColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMixedColorArgs): Promise<MixedColor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).mixedColor.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
