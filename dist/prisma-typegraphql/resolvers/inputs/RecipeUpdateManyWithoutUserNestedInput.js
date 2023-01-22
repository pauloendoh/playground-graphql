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
exports.RecipeUpdateManyWithoutUserNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RecipeCreateManyUserInputEnvelope_1 = require("../inputs/RecipeCreateManyUserInputEnvelope");
const RecipeCreateOrConnectWithoutUserInput_1 = require("../inputs/RecipeCreateOrConnectWithoutUserInput");
const RecipeCreateWithoutUserInput_1 = require("../inputs/RecipeCreateWithoutUserInput");
const RecipeScalarWhereInput_1 = require("../inputs/RecipeScalarWhereInput");
const RecipeUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/RecipeUpdateManyWithWhereWithoutUserInput");
const RecipeUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/RecipeUpdateWithWhereUniqueWithoutUserInput");
const RecipeUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/RecipeUpsertWithWhereUniqueWithoutUserInput");
const RecipeWhereUniqueInput_1 = require("../inputs/RecipeWhereUniqueInput");
let RecipeUpdateManyWithoutUserNestedInput = class RecipeUpdateManyWithoutUserNestedInput {
    create;
    connectOrCreate;
    upsert;
    createMany;
    set;
    disconnect;
    delete;
    connect;
    update;
    updateMany;
    deleteMany;
};
__decorate([
    TypeGraphQL.Field(_type => [RecipeCreateWithoutUserInput_1.RecipeCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeCreateOrConnectWithoutUserInput_1.RecipeCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeUpsertWithWhereUniqueWithoutUserInput_1.RecipeUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => RecipeCreateManyUserInputEnvelope_1.RecipeCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeWhereUniqueInput_1.RecipeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeWhereUniqueInput_1.RecipeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeWhereUniqueInput_1.RecipeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeWhereUniqueInput_1.RecipeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeUpdateWithWhereUniqueWithoutUserInput_1.RecipeUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeUpdateManyWithWhereWithoutUserInput_1.RecipeUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeScalarWhereInput_1.RecipeScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], RecipeUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
RecipeUpdateManyWithoutUserNestedInput = __decorate([
    TypeGraphQL.InputType("RecipeUpdateManyWithoutUserNestedInput", {
        isAbstract: true
    })
], RecipeUpdateManyWithoutUserNestedInput);
exports.RecipeUpdateManyWithoutUserNestedInput = RecipeUpdateManyWithoutUserNestedInput;
