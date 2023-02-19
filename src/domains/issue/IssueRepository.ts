import { myPrismaClient } from '../../utils/myPrismaClient'
import { IssueInput } from './types/IssueInput'

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

  createIssue(input: IssueInput, userId: string) {
    const { user, updatedAt, createdAt, labelIds, ...data } = input
    return this.prismaClient.issue.create({
      data: {
        ...data,
        labels: { connect: input.labelIds?.map((id) => ({ id })) },
        userId,
      },
    })
  }

  updateIssue(input: IssueInput) {
    const { user, updatedAt, createdAt, labelIds, ...data } = input

    return this.prismaClient.issue.update({
      data: {
        ...data,
        labels: {
          set: input.labelIds?.map((id) => ({ id })),
        },
        userId: undefined,
      },
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
