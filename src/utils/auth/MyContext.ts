import { Request, Response } from 'express'
import { User } from '../../../prisma-typegraphql'

export type MyContext = {
  req: Request & { user: User }
  res: Response
}
