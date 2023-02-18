import { IssueRepository } from './IssueRepository'
import { IssueValidInput } from './types/IssueValidInput'

export class IssueService {
  constructor(private issueRepo = new IssueRepository()) {}

  findIssues(userId: string) {
    return this.issueRepo.findIssues(userId)
  }

  saveIssue(input: IssueValidInput, userId: string) {
    if (input.id) return this.updateIssue(input, userId)

    return this.createIssue(input, userId)
  }

  createIssue(input: IssueValidInput, userId: string) {
    return this.issueRepo.createIssue(input, userId)
  }

  updateIssue(input: IssueValidInput, userId: string) {
    const isAllowed = this.issueRepo.userOwnsIssue(input.id!, userId)
    if (!isAllowed) throw new Error('You are not allowed to update this issue')

    return this.issueRepo.updateIssue(input)
  }

  async deleteIssue(issueId: string, userId: string) {
    const isAllowed = this.issueRepo.userOwnsIssue(issueId, userId)
    if (!isAllowed) throw new Error('You are not allowed to delete this issue')

    const deleted = await this.issueRepo.deleteIssue(issueId)
    return !!deleted
  }
}
