import { myPrismaClient } from "../../utils/myPrismaClient";
import { RegisterValidInput } from "./types/RegisterValidInput";

export class AuthRepository {
  constructor(private prismaClient = myPrismaClient) {}

  createUser = async (dto: RegisterValidInput) => {
    return this.prismaClient.user.create({
      data: {
        username: dto.username,
        email: dto.email,
        password: dto.password1,
      },
    });
  };

  public async findUserByUsernameEmail(usernameOrEmail: string) {
    const user = await this.prismaClient.user.findFirst({
      where: {
        OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      },
    });

    return user;
  }
}
