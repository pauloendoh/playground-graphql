import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../models/User";
import { RegisterInput } from "./types/RegisterInput";

@Resolver(User)
export class UserResolver {
  constructor() {}

  @Query(() => User)
  async userQuery(@Arg("input") input: RegisterInput) {
    return new User();
  }

  @Mutation(() => User)
  async registerMutation(@Arg("input") input: RegisterInput) {
    return new User();
  }
}
