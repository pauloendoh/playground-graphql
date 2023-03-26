import * as TypeGraphQL from "type-graphql";
import { ColorProportion } from "../../../models/ColorProportion";
import { RawColor } from "../../../models/RawColor";
import { User } from "../../../models/User";
import { RawColorColorProportionsArgs } from "./args/RawColorColorProportionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RawColor)
export class RawColorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() rawColor: RawColor, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).rawColor.findUnique({
      where: {
        id: rawColor.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [ColorProportion], {
    nullable: false
  })
  async colorProportions(@TypeGraphQL.Root() rawColor: RawColor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RawColorColorProportionsArgs): Promise<ColorProportion[]> {
    return getPrismaFromContext(ctx).rawColor.findUnique({
      where: {
        id: rawColor.id,
      },
    }).colorProportions(args);
  }
}
