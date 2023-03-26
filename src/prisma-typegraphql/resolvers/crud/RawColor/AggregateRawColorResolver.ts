import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRawColorArgs } from "./args/AggregateRawColorArgs";
import { RawColor } from "../../../models/RawColor";
import { AggregateRawColor } from "../../outputs/AggregateRawColor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RawColor)
export class AggregateRawColorResolver {
  @TypeGraphQL.Query(_returns => AggregateRawColor, {
    nullable: false
  })
  async aggregateRawColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRawColorArgs): Promise<AggregateRawColor> {
    return getPrismaFromContext(ctx).rawColor.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
