import { Pool, PoolConfig } from 'pg'

interface CustomPoolConfig extends PoolConfig { // Extendemos interfas
  host: string
  port: number
  user: string
  password: string
  database: string
}

const poolconfig: CustomPoolConfig = { // Creamos el objeto
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'nodepg',
  idleTimeoutMillis: 30000
}

export const pool = new Pool(poolconfig) // Creamos pool
// pool.query('SELECT NOW()').then(result => console.log(result)).catch(e => console.log(e))
