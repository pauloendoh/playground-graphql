import { ValidationError } from "apollo-server";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../../utils/auth/isAuth";
import { MyContext } from "../../utils/auth/MyContext";
import { AuthService } from "./AuthService";
import { AuthUserOutput } from "./types/AuthUserOutput";
import { LoginValidInput } from "./types/LoginValidInput";
import { RegisterValidInput } from "./types/RegisterValidInput";

@Resolver()
export class AuthResolver {
  constructor(private authService = new AuthService()) {}

  @Query(() => AuthUserOutput)
  @UseMiddleware(isAuth)
  async meQuery(@Ctx() { req }: MyContext) {
    return this.authService.getAuthUserWithToken(req.user);
  }

  @Mutation(() => AuthUserOutput)
  async registerMutation(
    @Arg("data") data: RegisterValidInput
  ): Promise<AuthUserOutput> {
    if (data.password1 !== data.password2)
      throw new ValidationError("Passwords don't match");
    return this.authService.register(data);
  }

  @Mutation(() => AuthUserOutput)
  async loginMutation(
    @Arg("data") data: LoginValidInput
  ): Promise<AuthUserOutput> {
    return this.authService.login(data);
  }
}
