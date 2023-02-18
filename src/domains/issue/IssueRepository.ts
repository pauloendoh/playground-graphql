import { myPrismaClient } from '../../utils/myPrismaClient'
import { IssueValidInput } from './types/IssueValidInput'

export class IssueRepository {
  constructor(private prismaClient = myPrismaClient) {}

  userOwnsIssue(issueId: string, userId: string) {
    return this.prismaClient.issue.findFirst({
      where: {
        id: issueId,
        userId,
      },
    })
  }

  findIssues(userId: string) {
    return this.prismaClient.issue.findMany({
      where: {
        userId,
      },
    })
  }

  createIssue(input: IssueValidInput, userId: string) {
    const { user, ...data } = input
    return this.prismaClient.issue.create({
      data: {
        ...data,
        userId,
      },
    })
  }

  updateIssue(input: IssueValidInput) {
    const { user, updatedAt, ...data } = input

    return this.prismaClient.issue.update({
      data,
      where: {
        id: input.id,
      },
    })
  }

  deleteIssue(issueId: string) {
    return this.prismaClient.issue.delete({
      where: {
        id: issueId,
      },
    })
  }
}
