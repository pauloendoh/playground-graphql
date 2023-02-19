import { IssueRepository } from './IssueRepository'
import { ChangeIssuePositionInput } from './types/ChangeIssuePositionInput'
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

  async changeIssuePosition(userId: string, input: ChangeIssuePositionInput) {
    const foundIssue = await this.issueRepo.userOwnsIssue(input.issueId, userId)
    if (!foundIssue) throw new Error("Issue not found or you don't own it.")

    let issuesBetween = await this.issueRepo.findIssuesBetweenPositions({
      userId,
      isSolved: foundIssue.isSolved,
      fromPosition: input.fromPosition,
      toPosition: input.toPosition,
    })

    const isIncreasingPosition = input.fromPosition < input.toPosition
    if (isIncreasingPosition) {
      issuesBetween = issuesBetween.map((issue) => ({
        ...issue,
        position: issue.position - 1,
      }))
    }
    if (!isIncreasingPosition) {
      issuesBetween = issuesBetween.map((issue) => ({
        ...issue,
        position: issue.position + 1,
      }))
    }

    let index = issuesBetween.findIndex((i) => i.id === foundIssue.id)
    issuesBetween[index].position = input.toPosition

    await this.issueRepo.updateMany(issuesBetween)

    return true
  }
}
