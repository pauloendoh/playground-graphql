import { User } from "@prisma/client";
import { AuthenticationError } from "apollo-server";
import { config } from "dotenv";
import { verify } from "jsonwebtoken";
import { myPrismaClient } from "../myPrismaClient";

config();

export const validateJwt = (token: string) => {
  return new Promise<User>((res, rej) => {
    verify(
      token,
      String(process.env.JWT_SECRET),
      async (error, decodedObj: any) => {
        if (error) {
          return rej(new AuthenticationError("Token is not valid."));
        }

        const user = await myPrismaClient.user.findFirst({
          where: { id: decodedObj["userId"] },
        });
        if (!user) return rej(new AuthenticationError("Token is not valid."));

        return res(user);
      }
    );
  });
};
