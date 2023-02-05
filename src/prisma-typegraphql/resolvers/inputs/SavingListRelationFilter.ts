import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavingWhereInput } from "../inputs/SavingWhereInput";

@TypeGraphQL.InputType("SavingListRelationFilter", {
  isAbstract: true
})
export class SavingListRelationFilter {
  @TypeGraphQL.Field(_type => SavingWhereInput, {
    nullable: true
  })
  every?: SavingWhereInput | undefined;

  @TypeGraphQL.Field(_type => SavingWhereInput, {
    nullable: true
  })
  some?: SavingWhereInput | undefined;

  @TypeGraphQL.Field(_type => SavingWhereInput, {
    nullable: true
  })
  none?: SavingWhereInput | undefined;
}
