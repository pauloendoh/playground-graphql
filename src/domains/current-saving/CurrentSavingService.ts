import { CurrentSavingRepository } from "./CurrentSavingRepository";
import { CurrentSavingValidInput } from "./types/CurrentExpenseValidInput";

export class CurrentSavingService {
  constructor(private currentExpenseRepo = new CurrentSavingRepository()) {}

  saveCurrentExpense(input: CurrentSavingValidInput, userId: string) {
    // if (input.id) return this.updateCurrentExpense(input, userId);

    return this.createCurrentExpense(input, userId);
  }

  createCurrentExpense(input: CurrentSavingValidInput, userId: string) {
    return this.currentExpenseRepo.createCurrentExpense(input, userId);
  }

  // updateCurrentExpense(input: CurrentExpenseValidInput, userId: string) {
  //   return this.currentExpenseRepo.updateCurrentExpense(input, userId);
  // }
}
