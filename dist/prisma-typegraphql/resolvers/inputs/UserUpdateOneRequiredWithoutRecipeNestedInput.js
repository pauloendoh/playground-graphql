"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutRecipeNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutRecipeInput_1 = require("../inputs/UserCreateOrConnectWithoutRecipeInput");
const UserCreateWithoutRecipeInput_1 = require("../inputs/UserCreateWithoutRecipeInput");
const UserUpdateWithoutRecipeInput_1 = require("../inputs/UserUpdateWithoutRecipeInput");
const UserUpsertWithoutRecipeInput_1 = require("../inputs/UserUpsertWithoutRecipeInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutRecipeNestedInput = class UserUpdateOneRequiredWithoutRecipeNestedInput {
    create;
    connectOrCreate;
    upsert;
    connect;
    update;
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRecipeInput_1.UserCreateWithoutRecipeInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutRecipeNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRecipeInput_1.UserCreateOrConnectWithoutRecipeInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutRecipeNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutRecipeInput_1.UserUpsertWithoutRecipeInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutRecipeNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutRecipeNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutRecipeInput_1.UserUpdateWithoutRecipeInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateOneRequiredWithoutRecipeNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutRecipeNestedInput = __decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutRecipeNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutRecipeNestedInput);
exports.UserUpdateOneRequiredWithoutRecipeNestedInput = UserUpdateOneRequiredWithoutRecipeNestedInput;
