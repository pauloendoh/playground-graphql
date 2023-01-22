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
exports.RegisterValidInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let RegisterValidInput = class RegisterValidInput {
    username;
    email;
    password1;
    password2;
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: "Username is required." }),
    (0, class_validator_1.MinLength)(6, { message: "Username must have at least 6 characters." }),
    __metadata("design:type", String)
], RegisterValidInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(undefined, { message: "Email is required." }),
    __metadata("design:type", String)
], RegisterValidInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: "Password is required." }),
    (0, class_validator_1.MinLength)(6, { message: "Password must have at least 6 characters." }),
    __metadata("design:type", String)
], RegisterValidInput.prototype, "password1", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: "Password2 is required." }),
    (0, class_validator_1.MinLength)(6, { message: "Password2 must have at least 6 characters." }),
    __metadata("design:type", String)
], RegisterValidInput.prototype, "password2", void 0);
RegisterValidInput = __decorate([
    (0, type_graphql_1.InputType)()
], RegisterValidInput);
exports.RegisterValidInput = RegisterValidInput;
