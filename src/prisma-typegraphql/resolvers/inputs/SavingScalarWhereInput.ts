import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SavingScalarWhereInput", {
  isAbstract: true
})
export class SavingScalarWhereInput {
  @TypeGraphQL.Field(_type => [SavingScalarWhereInput], {
    nullable: true
  })
  AND?: SavingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingScalarWhereInput], {
    nullable: true
  })
  OR?: SavingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavingScalarWhereInput], {
    nullable: true
  })
  NOT?: SavingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  value?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  selectedAsAverageMonthlyGrowth?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
