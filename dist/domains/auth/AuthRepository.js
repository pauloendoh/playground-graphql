"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const myPrismaClient_1 = require("../../utils/myPrismaClient");
class AuthRepository {
    prismaClient;
    constructor(prismaClient = myPrismaClient_1.myPrismaClient) {
        this.prismaClient = prismaClient;
    }
    createUser = async (dto) => {
        return this.prismaClient.user.create({
            data: {
                username: dto.username,
                email: dto.email,
                password: dto.password1,
            },
        });
    };
    async findUserByUsernameEmail(usernameOrEmail) {
        const user = await this.prismaClient.user.findFirst({
            where: {
                OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
            },
        });
        return user;
    }
}
exports.AuthRepository = AuthRepository;
