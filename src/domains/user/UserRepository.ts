import { PrismaClient } from '@prisma/client'

export class UserRepository {
  constructor(private prisma = new PrismaClient()) {}

  async findUserByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: {
        username,
      },
    })
  }
}
