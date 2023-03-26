import * as TypeGraphQL from "type-graphql";
import { ColorProportion } from "../../../models/ColorProportion";
import { MixedColor } from "../../../models/MixedColor";
import { User } from "../../../models/User";
import { MixedColorColorProportionsArgs } from "./args/MixedColorColorProportionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MixedColor)
export class MixedColorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() mixedColor: MixedColor, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).mixedColor.findUnique({
      where: {
        id: mixedColor.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [ColorProportion], {
    nullable: false
  })
  async colorProportions(@TypeGraphQL.Root() mixedColor: MixedColor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MixedColorColorProportionsArgs): Promise<ColorProportion[]> {
    return getPrismaFromContext(ctx).mixedColor.findUnique({
      where: {
        id: mixedColor.id,
      },
    }).colorProportions(args);
  }
}
