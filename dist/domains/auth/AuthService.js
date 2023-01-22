"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const apollo_server_1 = require("apollo-server");
const bcrypt_1 = require("bcrypt");
const dotenv_1 = require("dotenv");
const myPrismaClient_1 = require("../../utils/myPrismaClient");
const validateUsernameOrThrow_1 = require("../../utils/text/validateUsernameOrThrow");
const AuthRepository_1 = require("./AuthRepository");
const AuthUserOutput_1 = require("./types/AuthUserOutput");
(0, dotenv_1.config)();
class AuthService {
    authRepo;
    constructor(authRepo = new AuthRepository_1.AuthRepository()) {
        this.authRepo = authRepo;
    }
    async register(input) {
        input.username = input.username.trim();
        input.email = input.email.trim();
        const emailExists = await myPrismaClient_1.myPrismaClient.user.findFirst({
            where: { email: input.email },
        });
        if (emailExists)
            throw new apollo_server_1.ValidationError("Email already in use.");
        const usernameExists = await myPrismaClient_1.myPrismaClient.user.findFirst({
            where: { username: input.username },
        });
        if (usernameExists)
            throw new apollo_server_1.ValidationError("Username already in use.");
        (0, validateUsernameOrThrow_1.validateUsernameOrThrow)(input.username);
        const salt = await (0, bcrypt_1.genSalt)(10);
        const hashedPassword = await (0, bcrypt_1.hash)(input.password1, salt);
        const createdUser = await myPrismaClient_1.myPrismaClient.user.create({
            data: {
                email: input.email,
                password: hashedPassword,
                username: input.username,
            },
        });
        const { token, expiresAt } = this.getSignInToken(createdUser);
        return new AuthUserOutput_1.AuthUserOutput(createdUser, token, expiresAt);
    }
    getSignInToken(user) {
        const expiresAt = new Date(new Date().setDate(new Date().getDate() + 365));
        const ONE_YEAR_IN_SECONDS = 3600 * 24 * 365;
        const token = (0, jsonwebtoken_1.sign)({ userId: user.id }, String(process.env.JWT_SECRET), {
            expiresIn: ONE_YEAR_IN_SECONDS,
        });
        return { token, expiresAt };
    }
    async getAuthUserWithToken(user) {
        const { token, expiresAt } = this.getSignInToken(user);
        return new AuthUserOutput_1.AuthUserOutput(user, token, expiresAt);
    }
    async login(input) {
        input.usernameOrEmail = input.usernameOrEmail.trim();
        const user = await this.authRepo.findUserByUsernameEmail(input.usernameOrEmail);
        if (!user)
            throw new Error("User not found");
        const passwordOk = await (0, bcrypt_1.compare)(input.password, user.password);
        if (!passwordOk)
            throw new apollo_server_1.AuthenticationError("Password not correct");
        const { token, expiresAt } = this.getSignInToken(user);
        return new AuthUserOutput_1.AuthUserOutput(user, token, expiresAt);
    }
}
exports.AuthService = AuthService;
