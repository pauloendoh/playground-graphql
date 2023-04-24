import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNhAuthorArgs } from "./args/AggregateNhAuthorArgs";
import { CreateManyNhAuthorArgs } from "./args/CreateManyNhAuthorArgs";
import { CreateOneNhAuthorArgs } from "./args/CreateOneNhAuthorArgs";
import { DeleteManyNhAuthorArgs } from "./args/DeleteManyNhAuthorArgs";
import { DeleteOneNhAuthorArgs } from "./args/DeleteOneNhAuthorArgs";
import { FindFirstNhAuthorArgs } from "./args/FindFirstNhAuthorArgs";
import { FindFirstNhAuthorOrThrowArgs } from "./args/FindFirstNhAuthorOrThrowArgs";
import { FindManyNhAuthorArgs } from "./args/FindManyNhAuthorArgs";
import { FindUniqueNhAuthorArgs } from "./args/FindUniqueNhAuthorArgs";
import { FindUniqueNhAuthorOrThrowArgs } from "./args/FindUniqueNhAuthorOrThrowArgs";
import { GroupByNhAuthorArgs } from "./args/GroupByNhAuthorArgs";
import { UpdateManyNhAuthorArgs } from "./args/UpdateManyNhAuthorArgs";
import { UpdateOneNhAuthorArgs } from "./args/UpdateOneNhAuthorArgs";
import { UpsertOneNhAuthorArgs } from "./args/UpsertOneNhAuthorArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { NhAuthor } from "../../../models/NhAuthor";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNhAuthor } from "../../outputs/AggregateNhAuthor";
import { NhAuthorGroupBy } from "../../outputs/NhAuthorGroupBy";

@TypeGraphQL.Resolver(_of => NhAuthor)
export class NhAuthorCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateNhAuthor, {
    nullable: false
  })
  async aggregateNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNhAuthorArgs): Promise<AggregateNhAuthor> {
    return getPrismaFromContext(ctx).nhAuthor.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyNhAuthorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NhAuthor, {
    nullable: false
  })
  async createOneNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneNhAuthorArgs): Promise<NhAuthor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyNhAuthorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => NhAuthor, {
    nullable: true
  })
  async deleteOneNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneNhAuthorArgs): Promise<NhAuthor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NhAuthor, {
    nullable: true
  })
  async findFirstNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNhAuthorArgs): Promise<NhAuthor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NhAuthor, {
    nullable: true
  })
  async findFirstNhAuthorOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNhAuthorOrThrowArgs): Promise<NhAuthor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [NhAuthorGroupBy], {
    nullable: false
  })
  async groupByNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNhAuthorArgs): Promise<NhAuthorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyNhAuthorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => NhAuthor, {
    nullable: false
  })
  async upsertOneNhAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneNhAuthorArgs): Promise<NhAuthor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nhAuthor.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
