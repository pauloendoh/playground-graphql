import { SalaryRepository } from './SalaryRepository'
import { SalaryValidInput } from './types/SalaryValidInput'

export class SalaryService {
  constructor(private readonly repo = new SalaryRepository()) {}

  findUnique(userId: string) {
    return this.repo.find(userId)
  }

  findMany(userId: string) {
    return this.repo.findMany(userId)
  }

  async save(input: SalaryValidInput, userId: string) {
    const found = await this.repo.find(userId)
    if (found) {
      return this.repo.update(input, userId)
    }

    return this.repo.create(input, userId)
  }

  // async deleteSalary(salaryId: string, userId: string) {
  //   const isAllowed = this.salaryRepo.userOwnsSalary(salaryId, userId)
  //   if (!isAllowed) throw new Error('You are not allowed to delete this salary')

  //   const deleted = await this.salaryRepo.deleteSalary(salaryId)
  //   return !!deleted
  // }
}
