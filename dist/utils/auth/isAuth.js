"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const validateJwt_1 = require("./validateJwt");
const isAuth = async ({ context }, next) => {
    const { req } = context;
    const authToken = req.header("x-auth-token");
    if (!authToken) {
        throw new Error("No token, authorization denied! Sign in and try again.");
    }
    context.req.user = await (0, validateJwt_1.validateJwt)(authToken);
    return next();
};
exports.isAuth = isAuth;
