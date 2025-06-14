import type { UserApi } from '../../api'
import type { User } from '../../model/User'

export function mapUserApiToUser(userApi: UserApi): User {
  const user: User = {
    id: userApi.id,
    firstName: userApi.first_name,
    lastName: userApi.last_name,
    avatarUrl: userApi.links?.avatar,
  }

  return user
}
