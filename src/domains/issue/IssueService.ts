import { IssueRepository } from './IssueRepository'
import { IssueInput } from './types/IssueInput'

export class IssueService {
  constructor(private issueRepo = new IssueRepository()) {}

  findIssues(userId: string) {
    return this.issueRepo.findIssues(userId)
  }

  async saveIssue(input: IssueInput, userId: string) {
    if (input.id) return this.updateIssue(input, userId)

    return this.createIssue(input, userId)
  }

  async createIssue(input: IssueInput, userId: string) {
    input.position = await this.issueRepo.findLastPosition(
      userId,
      input.isSolved
    )

    return this.issueRepo.createIssue(input, userId)
  }

  async updateIssue(input: IssueInput, userId: string) {
    const isAllowed = this.issueRepo.userOwnsIssue(input.id!, userId)
    if (!isAllowed) throw new Error('You are not allowed to update this issue')

    const prev = await this.issueRepo.findById(input.id)
    if (!prev) throw new Error('Issue not found')

    if (prev.isSolved !== input.isSolved) {
      input.position = await this.issueRepo.findLastPosition(
        userId,
        input.isSolved
      )
    }

    return this.issueRepo.updateIssue(input)
  }

  async deleteIssue(issueId: string, userId: string) {
    const isAllowed = this.issueRepo.userOwnsIssue(issueId, userId)
    if (!isAllowed) throw new Error('You are not allowed to delete this issue')

    const deleted = await this.issueRepo.deleteIssue(issueId)
    return !!deleted
  }
}
