import express, { Response, Request } from 'express'

const app = express()

app.get('/', (_req: Request, res: Response) => {
  console.log('this is ping')
  return res.send('some pong')
})

const PORT = 1234

app.listen(PORT, () => {
  console.log('Listen in PORT ')
})
