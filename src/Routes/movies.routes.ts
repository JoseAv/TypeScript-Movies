/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { MovieController } from '../controllers/movieController'

const ControllMovie = new MovieController()
export const MoviesRouter = Router()

MoviesRouter.get('/', ControllMovie.GetAll)
MoviesRouter.get('/:id', ControllMovie.GetOne)
MoviesRouter.post('/', ControllMovie.PostUser)
MoviesRouter.delete('/:id', ControllMovie.DeleteUser)
MoviesRouter.patch('/:id', ControllMovie.updateUser)
