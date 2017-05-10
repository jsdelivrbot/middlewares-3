import { FETCH_USERS } from './types'

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Jnae' },
      { name: 'John' },
      { name: 'Jim' }
    ]
  }
}
