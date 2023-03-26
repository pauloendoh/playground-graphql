import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ColorProportionCreateManyInput } from "../../../inputs/ColorProportionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyColorProportionArgs {
  @TypeGraphQL.Field(_type => [ColorProportionCreateManyInput], {
    nullable: false
  })
  data!: ColorProportionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
