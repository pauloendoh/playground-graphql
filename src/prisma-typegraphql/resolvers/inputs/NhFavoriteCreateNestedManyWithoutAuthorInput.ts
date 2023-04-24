import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCreateManyAuthorInputEnvelope } from "../inputs/NhFavoriteCreateManyAuthorInputEnvelope";
import { NhFavoriteCreateOrConnectWithoutAuthorInput } from "../inputs/NhFavoriteCreateOrConnectWithoutAuthorInput";
import { NhFavoriteCreateWithoutAuthorInput } from "../inputs/NhFavoriteCreateWithoutAuthorInput";
import { NhFavoriteWhereUniqueInput } from "../inputs/NhFavoriteWhereUniqueInput";

@TypeGraphQL.InputType("NhFavoriteCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class NhFavoriteCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [NhFavoriteCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: NhFavoriteCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: NhFavoriteCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: NhFavoriteCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NhFavoriteWhereUniqueInput], {
    nullable: true
  })
  connect?: NhFavoriteWhereUniqueInput[] | undefined;
}
