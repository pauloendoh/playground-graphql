import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { IssueLabel } from "../models/IssueLabel";
import { User } from "../models/User";
import { IssueCount } from "../resolvers/outputs/IssueCount";

@TypeGraphQL.ObjectType("Issue", {
  isAbstract: true
})
export class Issue {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  solvedPosition!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  solution!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isSolved!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  solvedAt?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  frequency!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  intensity!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  labels?: IssueLabel[];

  @TypeGraphQL.Field(_type => IssueCount, {
    nullable: true
  })
  _count?: IssueCount | null;
}
