import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyNhAuthorArgs } from "./args/FindManyNhAuthorArgs";
import { NhAuthor } from "../../../models/NhAuthor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhAuthor)
export class FindManyNhAuthorResolver {
  @TypeGraphQL.Query(_returns => [NhAuthor], {
    nullable: false
  })
  async nhAuthors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNhAuthorArgs): Promise<NhAuthor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
