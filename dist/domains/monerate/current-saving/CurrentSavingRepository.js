"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentSavingRepository = void 0;
const myPrismaClient_1 = require("../../../utils/myPrismaClient");
class CurrentSavingRepository {
    prismaClient;
    constructor(prismaClient = myPrismaClient_1.myPrismaClient) {
        this.prismaClient = prismaClient;
    }
    createCurrentExpense(input, userId) {
        return this.prismaClient.currentSaving.create({
            data: {
                ...input,
                userId,
            },
        });
    }
}
exports.CurrentSavingRepository = CurrentSavingRepository;
