import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNhAuthorArgs } from "./args/FindUniqueNhAuthorArgs";
import { NhAuthor } from "../../../models/NhAuthor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhAuthor)
export class FindUniqueNhAuthorResolver {
  @TypeGraphQL.Query(_returns => NhAuthor, {
    nullable: true
  })
  async nhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNhAuthorArgs): Promise<NhAuthor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
