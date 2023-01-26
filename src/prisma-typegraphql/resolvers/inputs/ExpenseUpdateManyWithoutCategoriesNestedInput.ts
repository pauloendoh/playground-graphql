import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateOrConnectWithoutCategoriesInput } from "../inputs/ExpenseCreateOrConnectWithoutCategoriesInput";
import { ExpenseCreateWithoutCategoriesInput } from "../inputs/ExpenseCreateWithoutCategoriesInput";
import { ExpenseScalarWhereInput } from "../inputs/ExpenseScalarWhereInput";
import { ExpenseUpdateManyWithWhereWithoutCategoriesInput } from "../inputs/ExpenseUpdateManyWithWhereWithoutCategoriesInput";
import { ExpenseUpdateWithWhereUniqueWithoutCategoriesInput } from "../inputs/ExpenseUpdateWithWhereUniqueWithoutCategoriesInput";
import { ExpenseUpsertWithWhereUniqueWithoutCategoriesInput } from "../inputs/ExpenseUpsertWithWhereUniqueWithoutCategoriesInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpdateManyWithoutCategoriesNestedInput", {
  isAbstract: true
})
export class ExpenseUpdateManyWithoutCategoriesNestedInput {
  @TypeGraphQL.Field(_type => [ExpenseCreateWithoutCategoriesInput], {
    nullable: true
  })
  create?: ExpenseCreateWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseCreateOrConnectWithoutCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: ExpenseCreateOrConnectWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseUpsertWithWhereUniqueWithoutCategoriesInput], {
    nullable: true
  })
  upsert?: ExpenseUpsertWithWhereUniqueWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseWhereUniqueInput], {
    nullable: true
  })
  set?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseWhereUniqueInput], {
    nullable: true
  })
  delete?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseWhereUniqueInput], {
    nullable: true
  })
  connect?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseUpdateWithWhereUniqueWithoutCategoriesInput], {
    nullable: true
  })
  update?: ExpenseUpdateWithWhereUniqueWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseUpdateManyWithWhereWithoutCategoriesInput], {
    nullable: true
  })
  updateMany?: ExpenseUpdateManyWithWhereWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExpenseScalarWhereInput[] | undefined;
}
