import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingWhereInput } from "../inputs/CurrentSavingWhereInput";

@TypeGraphQL.InputType("CurrentSavingListRelationFilter", {
  isAbstract: true
})
export class CurrentSavingListRelationFilter {
  @TypeGraphQL.Field(_type => CurrentSavingWhereInput, {
    nullable: true
  })
  every?: CurrentSavingWhereInput | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingWhereInput, {
    nullable: true
  })
  some?: CurrentSavingWhereInput | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingWhereInput, {
    nullable: true
  })
  none?: CurrentSavingWhereInput | undefined;
}
