import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNhAuthorOrThrowArgs } from "./args/FindUniqueNhAuthorOrThrowArgs";
import { NhAuthor } from "../../../models/NhAuthor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhAuthor)
export class FindUniqueNhAuthorOrThrowResolver {
  @TypeGraphQL.Query(_returns => NhAuthor, {
    nullable: true
  })
  async getNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNhAuthorOrThrowArgs): Promise<NhAuthor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
