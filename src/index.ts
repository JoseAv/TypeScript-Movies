import express, { json } from 'express'
import { MoviesRouter } from './Routes/movies.routes'

const app = express()
app.use(json())
app.use('/users', MoviesRouter)

const PORT = 1234

app.listen(PORT, () => {
  console.log('Listen in PORT ')
})
