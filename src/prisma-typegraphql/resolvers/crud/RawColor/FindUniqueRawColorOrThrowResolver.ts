import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRawColorOrThrowArgs } from "./args/FindUniqueRawColorOrThrowArgs";
import { RawColor } from "../../../models/RawColor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RawColor)
export class FindUniqueRawColorOrThrowResolver {
  @TypeGraphQL.Query(_returns => RawColor, {
    nullable: true
  })
  async getRawColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRawColorOrThrowArgs): Promise<RawColor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rawColor.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
