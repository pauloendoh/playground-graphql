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
exports.CurrentSavingUpdateManyWithoutUserNestedInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CurrentSavingCreateManyUserInputEnvelope_1 = require("../inputs/CurrentSavingCreateManyUserInputEnvelope");
const CurrentSavingCreateOrConnectWithoutUserInput_1 = require("../inputs/CurrentSavingCreateOrConnectWithoutUserInput");
const CurrentSavingCreateWithoutUserInput_1 = require("../inputs/CurrentSavingCreateWithoutUserInput");
const CurrentSavingScalarWhereInput_1 = require("../inputs/CurrentSavingScalarWhereInput");
const CurrentSavingUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/CurrentSavingUpdateManyWithWhereWithoutUserInput");
const CurrentSavingUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/CurrentSavingUpdateWithWhereUniqueWithoutUserInput");
const CurrentSavingUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/CurrentSavingUpsertWithWhereUniqueWithoutUserInput");
const CurrentSavingWhereUniqueInput_1 = require("../inputs/CurrentSavingWhereUniqueInput");
let CurrentSavingUpdateManyWithoutUserNestedInput = class CurrentSavingUpdateManyWithoutUserNestedInput {
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
    TypeGraphQL.Field(_type => [CurrentSavingCreateWithoutUserInput_1.CurrentSavingCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CurrentSavingCreateOrConnectWithoutUserInput_1.CurrentSavingCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CurrentSavingUpsertWithWhereUniqueWithoutUserInput_1.CurrentSavingUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => CurrentSavingCreateManyUserInputEnvelope_1.CurrentSavingCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CurrentSavingWhereUniqueInput_1.CurrentSavingWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CurrentSavingWhereUniqueInput_1.CurrentSavingWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CurrentSavingWhereUniqueInput_1.CurrentSavingWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CurrentSavingWhereUniqueInput_1.CurrentSavingWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CurrentSavingUpdateWithWhereUniqueWithoutUserInput_1.CurrentSavingUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CurrentSavingUpdateManyWithWhereWithoutUserInput_1.CurrentSavingUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CurrentSavingScalarWhereInput_1.CurrentSavingScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], CurrentSavingUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
CurrentSavingUpdateManyWithoutUserNestedInput = __decorate([
    TypeGraphQL.InputType("CurrentSavingUpdateManyWithoutUserNestedInput", {
        isAbstract: true
    })
], CurrentSavingUpdateManyWithoutUserNestedInput);
exports.CurrentSavingUpdateManyWithoutUserNestedInput = CurrentSavingUpdateManyWithoutUserNestedInput;
