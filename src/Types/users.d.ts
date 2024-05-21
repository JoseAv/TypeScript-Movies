export interface users {
  name: string
  email: string
}

export type name = Pick<users, 'name'>
export type email = Pick<users, 'email'>
