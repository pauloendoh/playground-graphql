import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ColorProportionUpdateManyMutationInput } from "../../../inputs/ColorProportionUpdateManyMutationInput";
import { ColorProportionWhereInput } from "../../../inputs/ColorProportionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyColorProportionArgs {
  @TypeGraphQL.Field(_type => ColorProportionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ColorProportionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ColorProportionWhereInput, {
    nullable: true
  })
  where?: ColorProportionWhereInput | undefined;
}
