import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavingOrderByWithRelationInput } from "../../../inputs/SavingOrderByWithRelationInput";
import { SavingWhereInput } from "../../../inputs/SavingWhereInput";
import { SavingWhereUniqueInput } from "../../../inputs/SavingWhereUniqueInput";
import { SavingScalarFieldEnum } from "../../../../enums/SavingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserSavingsArgs {
  @TypeGraphQL.Field(_type => SavingWhereInput, {
    nullable: true
  })
  where?: SavingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SavingOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SavingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SavingWhereUniqueInput, {
    nullable: true
  })
  cursor?: SavingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SavingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "value" | "date" | "createdAt" | "updatedAt"> | undefined;
}
