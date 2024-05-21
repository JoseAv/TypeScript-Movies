import { Response, Request } from 'express'
import { pool } from '../data/db'
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MovieController {
  GetAll = async (_req: Request, res: Response): Promise<void> => {
    const { rows } = await pool.query('SELECT * FROM users')
    res.json(rows)
  }

  GetOne = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    res.json(rows[0])
  }

  PostUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email } = req.body
    console.log(req.body)
    const { rowCount } = await pool.query('INSERT INTO users (name,email) VALUES ($1,$2)', [name, email])
    if (rowCount !== 1) res.status(500).json({ message: 'usuario no agregado' })
    res.json({ message: 'Usuario CREADO correctamente' })
  }

  DeleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const { rows, rowCount } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id])

    res.json({ rows, rowCount })
  }

  updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const { name, email } = req.body
    const { rows } = await pool.query('UPDATE  users SET name=$1, email=$2  WHERE id = $3 RETURNING *', [name, email, id])

    res.json(rows[0])
  }
}
