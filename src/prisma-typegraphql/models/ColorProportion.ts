import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MixedColor } from "../models/MixedColor";
import { RawColor } from "../models/RawColor";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("ColorProportion", {
  isAbstract: true
})
export class ColorProportion {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;

  mixedColor?: MixedColor;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mixedColorId!: string;

  rawColor?: RawColor;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  rawColorId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  proportion!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
