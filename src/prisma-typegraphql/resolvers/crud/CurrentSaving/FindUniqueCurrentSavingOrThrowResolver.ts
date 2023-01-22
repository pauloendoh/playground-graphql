import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCurrentSavingOrThrowArgs } from "./args/FindUniqueCurrentSavingOrThrowArgs";
import { CurrentSaving } from "../../../models/CurrentSaving";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CurrentSaving)
export class FindUniqueCurrentSavingOrThrowResolver {
  @TypeGraphQL.Query(_returns => CurrentSaving, {
    nullable: true
  })
  async getCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCurrentSavingOrThrowArgs): Promise<CurrentSaving | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
