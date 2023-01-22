import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCurrentSavingOrThrowArgs } from "./args/FindFirstCurrentSavingOrThrowArgs";
import { CurrentSaving } from "../../../models/CurrentSaving";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CurrentSaving)
export class FindFirstCurrentSavingOrThrowResolver {
  @TypeGraphQL.Query(_returns => CurrentSaving, {
    nullable: true
  })
  async findFirstCurrentSavingOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCurrentSavingOrThrowArgs): Promise<CurrentSaving | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
