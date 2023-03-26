import * as TypeGraphQL from "type-graphql";
import { ColorProportion } from "../../../models/ColorProportion";
import { MixedColor } from "../../../models/MixedColor";
import { RawColor } from "../../../models/RawColor";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ColorProportion)
export class ColorProportionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() colorProportion: ColorProportion, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).colorProportion.findUnique({
      where: {
        id: colorProportion.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => MixedColor, {
    nullable: false
  })
  async mixedColor(@TypeGraphQL.Root() colorProportion: ColorProportion, @TypeGraphQL.Ctx() ctx: any): Promise<MixedColor> {
    return getPrismaFromContext(ctx).colorProportion.findUnique({
      where: {
        id: colorProportion.id,
      },
    }).mixedColor({});
  }

  @TypeGraphQL.FieldResolver(_type => RawColor, {
    nullable: false
  })
  async rawColor(@TypeGraphQL.Root() colorProportion: ColorProportion, @TypeGraphQL.Ctx() ctx: any): Promise<RawColor> {
    return getPrismaFromContext(ctx).colorProportion.findUnique({
      where: {
        id: colorProportion.id,
      },
    }).rawColor({});
  }
}
