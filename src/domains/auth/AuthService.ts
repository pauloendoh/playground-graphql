import { sign } from "jsonwebtoken";

import { AuthenticationError, ValidationError } from "apollo-server";
import { compare, genSalt, hash } from "bcrypt";
import { config } from "dotenv";
import { User } from "../../prisma-typegraphql";
import { myPrismaClient } from "../../utils/myPrismaClient";
import { validateUsernameOrThrow } from "../../utils/text/validateUsernameOrThrow";
import { AuthRepository } from "./AuthRepository";
import { AuthUserOutput } from "./types/AuthUserOutput";
import { LoginValidInput } from "./types/LoginValidInput";
import { RegisterValidInput } from "./types/RegisterValidInput";

config();

export class AuthService {
  constructor(private authRepo = new AuthRepository()) {}

  async register(input: RegisterValidInput) {
    input.username = input.username.trim();
    input.email = input.email.trim();

    const emailExists = await myPrismaClient.user.findFirst({
      where: { email: input.email },
    });
    if (emailExists) throw new ValidationError("Email already in use.");

    const usernameExists = await myPrismaClient.user.findFirst({
      where: { username: input.username },
    });
    if (usernameExists) throw new ValidationError("Username already in use.");

    validateUsernameOrThrow(input.username);

    const salt = await genSalt(10);
    const hashedPassword = await hash(input.password1, salt);

    const createdUser = await myPrismaClient.user.create({
      data: {
        email: input.email,
        password: hashedPassword,
        username: input.username,
      },
    });

    const { token, expiresAt } = this.getSignInToken(createdUser);

    return new AuthUserOutput(createdUser, token, expiresAt);
  }

  private getSignInToken(user: User) {
    const expiresAt = new Date(new Date().setDate(new Date().getDate() + 365));
    const ONE_YEAR_IN_SECONDS = 3600 * 24 * 365;

    const token = sign({ userId: user.id }, String(process.env.JWT_SECRET), {
      expiresIn: ONE_YEAR_IN_SECONDS,
    });
    return { token, expiresAt };
  }

  public async getAuthUserWithToken(user: User) {
    const { token, expiresAt } = this.getSignInToken(user);
    return new AuthUserOutput(user, token, expiresAt);
  }

  public async login(input: LoginValidInput) {
    input.usernameOrEmail = input.usernameOrEmail.trim();
    const user = await this.authRepo.findUserByUsernameEmail(
      input.usernameOrEmail
    );
    if (!user) throw new Error("User not found");

    const passwordOk = await compare(input.password, user.password);
    if (!passwordOk) throw new AuthenticationError("Password not correct");

    const { token, expiresAt } = this.getSignInToken(user);

    return new AuthUserOutput(user, token, expiresAt);
  }
}
