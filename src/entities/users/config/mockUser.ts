import type { User } from '../model/User'

export const mockUser: User = {
  id: 666,
  lastName: import.meta.env.VITE_USER_LAST_NAME || 'Фамилия',
  firstName: import.meta.env.VITE_USER_FIRST_NAME || 'Имя',
  avatarUrl: 'http://localhost:3000/users/avatar/4',
}
