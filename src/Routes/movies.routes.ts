/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { MovieController } from '../controllers/movieController'
export const MoviesRouter = Router()

MoviesRouter.get('/', MovieController.GetAll)
