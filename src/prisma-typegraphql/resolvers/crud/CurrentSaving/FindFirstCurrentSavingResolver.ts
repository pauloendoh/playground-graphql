import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCurrentSavingArgs } from "./args/FindFirstCurrentSavingArgs";
import { CurrentSaving } from "../../../models/CurrentSaving";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CurrentSaving)
export class FindFirstCurrentSavingResolver {
  @TypeGraphQL.Query(_returns => CurrentSaving, {
    nullable: true
  })
  async findFirstCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCurrentSavingArgs): Promise<CurrentSaving | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
