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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserOutput = void 0;
const type_graphql_1 = require("type-graphql");
// PE 3/3
let AuthUserOutput = class AuthUserOutput {
    id;
    username;
    email;
    token;
    expiresAt;
    constructor(user, token, expiresAt) {
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.token = token;
        this.expiresAt = expiresAt;
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AuthUserOutput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AuthUserOutput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AuthUserOutput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AuthUserOutput.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], AuthUserOutput.prototype, "expiresAt", void 0);
AuthUserOutput = __decorate([
    (0, type_graphql_1.ObjectType)(),
    __metadata("design:paramtypes", [Object, String, Date])
], AuthUserOutput);
exports.AuthUserOutput = AuthUserOutput;
