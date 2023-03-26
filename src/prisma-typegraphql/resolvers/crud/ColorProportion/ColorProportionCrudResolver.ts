import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateColorProportionArgs } from "./args/AggregateColorProportionArgs";
import { CreateManyColorProportionArgs } from "./args/CreateManyColorProportionArgs";
import { CreateOneColorProportionArgs } from "./args/CreateOneColorProportionArgs";
import { DeleteManyColorProportionArgs } from "./args/DeleteManyColorProportionArgs";
import { DeleteOneColorProportionArgs } from "./args/DeleteOneColorProportionArgs";
import { FindFirstColorProportionArgs } from "./args/FindFirstColorProportionArgs";
import { FindFirstColorProportionOrThrowArgs } from "./args/FindFirstColorProportionOrThrowArgs";
import { FindManyColorProportionArgs } from "./args/FindManyColorProportionArgs";
import { FindUniqueColorProportionArgs } from "./args/FindUniqueColorProportionArgs";
import { FindUniqueColorProportionOrThrowArgs } from "./args/FindUniqueColorProportionOrThrowArgs";
import { GroupByColorProportionArgs } from "./args/GroupByColorProportionArgs";
import { UpdateManyColorProportionArgs } from "./args/UpdateManyColorProportionArgs";
import { UpdateOneColorProportionArgs } from "./args/UpdateOneColorProportionArgs";
import { UpsertOneColorProportionArgs } from "./args/UpsertOneColorProportionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ColorProportion } from "../../../models/ColorProportion";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateColorProportion } from "../../outputs/AggregateColorProportion";
import { ColorProportionGroupBy } from "../../outputs/ColorProportionGroupBy";

@TypeGraphQL.Resolver(_of => ColorProportion)
export class ColorProportionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateColorProportion, {
    nullable: false
  })
  async aggregateColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateColorProportionArgs): Promise<AggregateColorProportion> {
    return getPrismaFromContext(ctx).colorProportion.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyColorProportionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ColorProportion, {
    nullable: false
  })
  async createOneColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneColorProportionArgs): Promise<ColorProportion> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyColorProportionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ColorProportion, {
    nullable: true
  })
  async deleteOneColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneColorProportionArgs): Promise<ColorProportion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ColorProportion, {
    nullable: true
  })
  async findFirstColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstColorProportionArgs): Promise<ColorProportion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ColorProportion, {
    nullable: true
  })
  async findFirstColorProportionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstColorProportionOrThrowArgs): Promise<ColorProportion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ColorProportion], {
    nullable: false
  })
  async colorProportions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyColorProportionArgs): Promise<ColorProportion[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ColorProportion, {
    nullable: true
  })
  async colorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueColorProportionArgs): Promise<ColorProportion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ColorProportion, {
    nullable: true
  })
  async getColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueColorProportionOrThrowArgs): Promise<ColorProportion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ColorProportionGroupBy], {
    nullable: false
  })
  async groupByColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByColorProportionArgs): Promise<ColorProportionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyColorProportionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ColorProportion, {
    nullable: true
  })
  async updateOneColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneColorProportionArgs): Promise<ColorProportion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ColorProportion, {
    nullable: false
  })
  async upsertOneColorProportion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneColorProportionArgs): Promise<ColorProportion> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).colorProportion.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
