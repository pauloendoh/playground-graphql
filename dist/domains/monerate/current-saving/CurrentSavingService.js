"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentSavingService = void 0;
const CurrentSavingRepository_1 = require("./CurrentSavingRepository");
class CurrentSavingService {
    currentExpenseRepo;
    constructor(currentExpenseRepo = new CurrentSavingRepository_1.CurrentSavingRepository()) {
        this.currentExpenseRepo = currentExpenseRepo;
    }
    saveCurrentExpense(input, userId) {
        // if (input.id) return this.updateCurrentExpense(input, userId);
        return this.createCurrentExpense(input, userId);
    }
    createCurrentExpense(input, userId) {
        return this.currentExpenseRepo.createCurrentExpense(input, userId);
    }
}
exports.CurrentSavingService = CurrentSavingService;
