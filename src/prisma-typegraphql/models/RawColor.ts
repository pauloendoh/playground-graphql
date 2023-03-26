import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ColorProportion } from "../models/ColorProportion";
import { User } from "../models/User";
import { RawColorCount } from "../resolvers/outputs/RawColorCount";

@TypeGraphQL.ObjectType("RawColor", {
  isAbstract: true
})
export class RawColor {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  colorProportions?: ColorProportion[];

  @TypeGraphQL.Field(_type => RawColorCount, {
    nullable: true
  })
  _count?: RawColorCount | null;
}
