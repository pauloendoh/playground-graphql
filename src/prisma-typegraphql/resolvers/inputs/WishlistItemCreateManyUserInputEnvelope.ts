import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WishlistItemCreateManyUserInput } from "../inputs/WishlistItemCreateManyUserInput";

@TypeGraphQL.InputType("WishlistItemCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class WishlistItemCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [WishlistItemCreateManyUserInput], {
    nullable: false
  })
  data!: WishlistItemCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
