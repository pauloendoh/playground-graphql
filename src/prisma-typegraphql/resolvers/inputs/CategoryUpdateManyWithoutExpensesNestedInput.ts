import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutExpensesInput } from "../inputs/CategoryCreateOrConnectWithoutExpensesInput";
import { CategoryCreateWithoutExpensesInput } from "../inputs/CategoryCreateWithoutExpensesInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutExpensesInput } from "../inputs/CategoryUpdateManyWithWhereWithoutExpensesInput";
import { CategoryUpdateWithWhereUniqueWithoutExpensesInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutExpensesInput";
import { CategoryUpsertWithWhereUniqueWithoutExpensesInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutExpensesInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateManyWithoutExpensesNestedInput", {
  isAbstract: true
})
export class CategoryUpdateManyWithoutExpensesNestedInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutExpensesInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutExpensesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutExpensesInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutExpensesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutExpensesInput], {
    nullable: true
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutExpensesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  set?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutExpensesInput], {
    nullable: true
  })
  update?: CategoryUpdateWithWhereUniqueWithoutExpensesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutExpensesInput], {
    nullable: true
  })
  updateMany?: CategoryUpdateManyWithWhereWithoutExpensesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;
}
