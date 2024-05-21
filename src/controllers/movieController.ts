import { Response, Request } from 'express'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MovieController {
  static async GetAll (_req: Request, res: Response): Promise<void> {
    console.log('this is ping')
    res.send('some pong')
  }
}
