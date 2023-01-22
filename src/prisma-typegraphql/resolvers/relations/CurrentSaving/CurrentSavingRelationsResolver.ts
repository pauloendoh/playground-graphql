import * as TypeGraphQL from "type-graphql";
import { CurrentSaving } from "../../../models/CurrentSaving";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CurrentSaving)
export class CurrentSavingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() currentSaving: CurrentSaving, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).currentSaving.findUnique({
      where: {
        id: currentSaving.id,
      },
    }).user({});
  }
}
