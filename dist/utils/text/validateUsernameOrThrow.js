"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUsernameOrThrow = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const validateUsernameOrThrow = (username) => {
    // Checking if username is valid
    const regex = new RegExp(/^[a-zA-Z0-9]+$/);
    if (!regex.test(username))
        throw new apollo_server_express_1.ValidationError("Invalid characters");
    if (username.length <= 3)
        throw new apollo_server_express_1.ValidationError("Username must have at least 3 characters");
    if (username.length >= 16)
        throw new apollo_server_express_1.ValidationError("Username must not be greather than 16 characters");
    return true;
};
exports.validateUsernameOrThrow = validateUsernameOrThrow;
