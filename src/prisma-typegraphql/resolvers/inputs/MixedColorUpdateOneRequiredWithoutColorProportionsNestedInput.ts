import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MixedColorCreateOrConnectWithoutColorProportionsInput } from "../inputs/MixedColorCreateOrConnectWithoutColorProportionsInput";
import { MixedColorCreateWithoutColorProportionsInput } from "../inputs/MixedColorCreateWithoutColorProportionsInput";
import { MixedColorUpdateWithoutColorProportionsInput } from "../inputs/MixedColorUpdateWithoutColorProportionsInput";
import { MixedColorUpsertWithoutColorProportionsInput } from "../inputs/MixedColorUpsertWithoutColorProportionsInput";
import { MixedColorWhereUniqueInput } from "../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.InputType("MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput", {
  isAbstract: true
})
export class MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput {
  @TypeGraphQL.Field(_type => MixedColorCreateWithoutColorProportionsInput, {
    nullable: true
  })
  create?: MixedColorCreateWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorCreateOrConnectWithoutColorProportionsInput, {
    nullable: true
  })
  connectOrCreate?: MixedColorCreateOrConnectWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorUpsertWithoutColorProportionsInput, {
    nullable: true
  })
  upsert?: MixedColorUpsertWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorWhereUniqueInput, {
    nullable: true
  })
  connect?: MixedColorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MixedColorUpdateWithoutColorProportionsInput, {
    nullable: true
  })
  update?: MixedColorUpdateWithoutColorProportionsInput | undefined;
}
