import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMixedColorArgs } from "./args/UpsertOneMixedColorArgs";
import { MixedColor } from "../../../models/MixedColor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MixedColor)
export class UpsertOneMixedColorResolver {
  @TypeGraphQL.Mutation(_returns => MixedColor, {
    nullable: false
  })
  async upsertOneMixedColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMixedColorArgs): Promise<MixedColor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).mixedColor.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
