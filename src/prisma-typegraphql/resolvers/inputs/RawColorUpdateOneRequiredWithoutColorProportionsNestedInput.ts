import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RawColorCreateOrConnectWithoutColorProportionsInput } from "../inputs/RawColorCreateOrConnectWithoutColorProportionsInput";
import { RawColorCreateWithoutColorProportionsInput } from "../inputs/RawColorCreateWithoutColorProportionsInput";
import { RawColorUpdateWithoutColorProportionsInput } from "../inputs/RawColorUpdateWithoutColorProportionsInput";
import { RawColorUpsertWithoutColorProportionsInput } from "../inputs/RawColorUpsertWithoutColorProportionsInput";
import { RawColorWhereUniqueInput } from "../inputs/RawColorWhereUniqueInput";

@TypeGraphQL.InputType("RawColorUpdateOneRequiredWithoutColorProportionsNestedInput", {
  isAbstract: true
})
export class RawColorUpdateOneRequiredWithoutColorProportionsNestedInput {
  @TypeGraphQL.Field(_type => RawColorCreateWithoutColorProportionsInput, {
    nullable: true
  })
  create?: RawColorCreateWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => RawColorCreateOrConnectWithoutColorProportionsInput, {
    nullable: true
  })
  connectOrCreate?: RawColorCreateOrConnectWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => RawColorUpsertWithoutColorProportionsInput, {
    nullable: true
  })
  upsert?: RawColorUpsertWithoutColorProportionsInput | undefined;

  @TypeGraphQL.Field(_type => RawColorWhereUniqueInput, {
    nullable: true
  })
  connect?: RawColorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RawColorUpdateWithoutColorProportionsInput, {
    nullable: true
  })
  update?: RawColorUpdateWithoutColorProportionsInput | undefined;
}
