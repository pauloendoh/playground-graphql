import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCurrentSavingArgs } from "./args/AggregateCurrentSavingArgs";
import { CreateManyCurrentSavingArgs } from "./args/CreateManyCurrentSavingArgs";
import { CreateOneCurrentSavingArgs } from "./args/CreateOneCurrentSavingArgs";
import { DeleteManyCurrentSavingArgs } from "./args/DeleteManyCurrentSavingArgs";
import { DeleteOneCurrentSavingArgs } from "./args/DeleteOneCurrentSavingArgs";
import { FindFirstCurrentSavingArgs } from "./args/FindFirstCurrentSavingArgs";
import { FindFirstCurrentSavingOrThrowArgs } from "./args/FindFirstCurrentSavingOrThrowArgs";
import { FindManyCurrentSavingArgs } from "./args/FindManyCurrentSavingArgs";
import { FindUniqueCurrentSavingArgs } from "./args/FindUniqueCurrentSavingArgs";
import { FindUniqueCurrentSavingOrThrowArgs } from "./args/FindUniqueCurrentSavingOrThrowArgs";
import { GroupByCurrentSavingArgs } from "./args/GroupByCurrentSavingArgs";
import { UpdateManyCurrentSavingArgs } from "./args/UpdateManyCurrentSavingArgs";
import { UpdateOneCurrentSavingArgs } from "./args/UpdateOneCurrentSavingArgs";
import { UpsertOneCurrentSavingArgs } from "./args/UpsertOneCurrentSavingArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CurrentSaving } from "../../../models/CurrentSaving";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCurrentSaving } from "../../outputs/AggregateCurrentSaving";
import { CurrentSavingGroupBy } from "../../outputs/CurrentSavingGroupBy";

@TypeGraphQL.Resolver(_of => CurrentSaving)
export class CurrentSavingCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCurrentSaving, {
    nullable: false
  })
  async aggregateCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCurrentSavingArgs): Promise<AggregateCurrentSaving> {
    return getPrismaFromContext(ctx).currentSaving.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCurrentSavingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CurrentSaving, {
    nullable: false
  })
  async createOneCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCurrentSavingArgs): Promise<CurrentSaving> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCurrentSavingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CurrentSaving, {
    nullable: true
  })
  async deleteOneCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCurrentSavingArgs): Promise<CurrentSaving | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => CurrentSaving, {
    nullable: true
  })
  async findFirstCurrentSavingOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCurrentSavingOrThrowArgs): Promise<CurrentSaving | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CurrentSaving], {
    nullable: false
  })
  async currentSavings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCurrentSavingArgs): Promise<CurrentSaving[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CurrentSaving, {
    nullable: true
  })
  async currentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCurrentSavingArgs): Promise<CurrentSaving | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [CurrentSavingGroupBy], {
    nullable: false
  })
  async groupByCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCurrentSavingArgs): Promise<CurrentSavingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCurrentSavingArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CurrentSaving, {
    nullable: true
  })
  async updateOneCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCurrentSavingArgs): Promise<CurrentSaving | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => CurrentSaving, {
    nullable: false
  })
  async upsertOneCurrentSaving(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCurrentSavingArgs): Promise<CurrentSaving> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).currentSaving.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
