import { MiddlewareFn } from "type-graphql";
import { MyContext } from "./MyContext";
import { validateJwt } from "./validateJwt";

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const { req } = context;

  const authToken = req.header("x-auth-token");

  if (!authToken) {
    throw new Error("No token, authorization denied! Sign in and try again.");
  }

  context.req.user = await validateJwt(authToken);

  return next();
};
