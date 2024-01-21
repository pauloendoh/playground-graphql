import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ColorProportion } from "../models/ColorProportion";
import { User } from "../models/User";
import { MixedColorCount } from "../resolvers/outputs/MixedColorCount";

@TypeGraphQL.ObjectType("MixedColor", {
  isAbstract: true
})
export class MixedColor {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  color!: string;

  colorProportions?: ColorProportion[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => MixedColorCount, {
    nullable: true
  })
  _count?: MixedColorCount | null;
}
