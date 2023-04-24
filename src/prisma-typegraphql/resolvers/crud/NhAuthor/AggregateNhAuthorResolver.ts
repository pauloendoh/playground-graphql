import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNhAuthorArgs } from "./args/AggregateNhAuthorArgs";
import { NhAuthor } from "../../../models/NhAuthor";
import { AggregateNhAuthor } from "../../outputs/AggregateNhAuthor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NhAuthor)
export class AggregateNhAuthorResolver {
  @TypeGraphQL.Query(_returns => AggregateNhAuthor, {
    nullable: false
  })
  async aggregateNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNhAuthorArgs): Promise<AggregateNhAuthor> {
    return getPrismaFromContext(ctx).nhAuthor.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
