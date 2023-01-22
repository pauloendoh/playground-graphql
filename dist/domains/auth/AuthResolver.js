"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const isAuth_1 = require("../../utils/auth/isAuth");
const AuthService_1 = require("./AuthService");
const AuthUserOutput_1 = require("./types/AuthUserOutput");
const LoginValidInput_1 = require("./types/LoginValidInput");
const RegisterValidInput_1 = require("./types/RegisterValidInput");
let AuthResolver = class AuthResolver {
    authService;
    constructor(authService = new AuthService_1.AuthService()) {
        this.authService = authService;
    }
    async meQuery({ req }) {
        return this.authService.getAuthUserWithToken(req.user);
    }
    async registerMutation(data) {
        if (data.password1 !== data.password2)
            throw new apollo_server_1.ValidationError("Passwords don't match");
        return this.authService.register(data);
    }
    async loginMutation(data) {
        return this.authService.login(data);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => AuthUserOutput_1.AuthUserOutput),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "meQuery", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => AuthUserOutput_1.AuthUserOutput),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterValidInput_1.RegisterValidInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "registerMutation", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => AuthUserOutput_1.AuthUserOutput),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginValidInput_1.LoginValidInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "loginMutation", null);
AuthResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Object])
], AuthResolver);
exports.AuthResolver = AuthResolver;
