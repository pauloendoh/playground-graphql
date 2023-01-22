"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJwt = void 0;
const apollo_server_1 = require("apollo-server");
const dotenv_1 = require("dotenv");
const jsonwebtoken_1 = require("jsonwebtoken");
const myPrismaClient_1 = require("../myPrismaClient");
(0, dotenv_1.config)();
const validateJwt = (token) => {
    return new Promise((res, rej) => {
        (0, jsonwebtoken_1.verify)(token, String(process.env.JWT_SECRET), async (error, decodedObj) => {
            if (error) {
                return rej(new apollo_server_1.AuthenticationError("Token is not valid."));
            }
            const user = await myPrismaClient_1.myPrismaClient.user.findFirst({
                where: { id: decodedObj["userId"] },
            });
            if (!user)
                return rej(new apollo_server_1.AuthenticationError("Token is not valid."));
            return res(user);
        });
    });
};
exports.validateJwt = validateJwt;
