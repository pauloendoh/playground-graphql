import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'
import { Issue } from '../../prisma-typegraphql'
import { isAuth } from '../../utils/auth/isAuth'
import { MyContext } from '../../utils/auth/MyContext'
import { IssueService } from './IssueService'
import { ChangeIssuePositionInput } from './types/ChangeIssuePositionInput'
import { IssueInput } from './types/IssueInput'

@Resolver()
export class IssueResolver {
  constructor(private issueService = new IssueService()) {}

  @Query(() => [Issue])
  @UseMiddleware(isAuth)
  async issuesQuery(@Ctx() { req }: MyContext): Promise<Issue[]> {
    return this.issueService.findIssues(req.user.id)
  }

  @Mutation(() => Issue)
  @UseMiddleware(isAuth)
  async saveIssueMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: IssueInput
  ): Promise<Issue> {
    return this.issueService.saveIssue(data, req.user.id)
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteIssueMutation(
    @Ctx() { req }: MyContext,
    @Arg('issueId') issueId: string
  ) {
    return this.issueService.deleteIssue(issueId, req.user.id)
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async changeIssuePositionMutation(
    @Ctx() { req }: MyContext,
    @Arg('data') data: ChangeIssuePositionInput
  ): Promise<boolean> {
    return this.issueService.changeIssuePosition(req.user.id, data)
  }
}
