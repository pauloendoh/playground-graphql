import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneNhAuthorArgs } from "./args/UpdateOneNhAuthorArgs";
import { NhAuthor } from "../../../models/NhAuthor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhAuthor)
export class UpdateOneNhAuthorResolver {
  @TypeGraphQL.Mutation(_returns => NhAuthor, {
    nullable: true
  })
  async updateOneNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneNhAuthorArgs): Promise<NhAuthor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
